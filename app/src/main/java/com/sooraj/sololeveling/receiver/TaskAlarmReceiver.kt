package com.sooraj.sololeveling.receiver

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.Build
import android.os.PowerManager
import android.os.VibrationEffect
import android.os.Vibrator
import android.util.Log
import androidx.core.app.NotificationCompat
import com.sooraj.sololeveling.MainActivity
import com.sooraj.sololeveling.data.AppDatabase
import com.sooraj.sololeveling.data.TaskAlarmScheduler
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class TaskAlarmReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        val taskId = intent.getIntExtra("TASK_ID", -1)
        if (taskId == -1) return

        val powerManager = context.getSystemService(Context.POWER_SERVICE) as PowerManager
        val wakeLock = powerManager.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "SoloLeveling:TaskAlarm")
        wakeLock.acquire(3000) // Acquire for 3 seconds max

        val pendingResult = goAsync()
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val db = AppDatabase.getInstance(context)
                val task = db.taskDao.getTaskById(taskId)
                if (task == null) {
                    Log.w("TaskAlarmReceiver", "Task $taskId not found in DB")
                    return@launch
                }

                if (task.notificationMode == "Off") return@launch

                val isStrict = task.notificationMode == "Strict"

                val notificationManager =
                    context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                    if (androidx.core.content.ContextCompat.checkSelfPermission(
                            context,
                            android.Manifest.permission.POST_NOTIFICATIONS
                        ) != android.content.pm.PackageManager.PERMISSION_GRANTED
                    ) {
                        Log.w("TaskAlarmReceiver", "POST_NOTIFICATIONS permission not granted")
                        return@launch
                    }
                }

                val channelId = "solo_leveling_quests"

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    val channel = NotificationChannel(
                        channelId,
                        "Solo Leveling Quests",
                        if (isStrict) NotificationManager.IMPORTANCE_HIGH else NotificationManager.IMPORTANCE_DEFAULT
                    ).apply {
                        description = "Alarms and quest alerts for Solo Leveling Life System"
                        enableVibration(true)
                        if (isStrict) {
                            setBypassDnd(true)
                        }
                    }
                    notificationManager.createNotificationChannel(channel)
                }

                val yesIntent = Intent(context, TaskActionReceiver::class.java).apply {
                    action = "ACTION_YES"
                    putExtra("TASK_ID", taskId)
                }
                val yesPendingIntent = PendingIntent.getBroadcast(
                    context,
                    taskId * 2,
                    yesIntent,
                    PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
                )

                val noIntent = Intent(context, TaskActionReceiver::class.java).apply {
                    action = "ACTION_NO"
                    putExtra("TASK_ID", taskId)
                }
                val noPendingIntent = PendingIntent.getBroadcast(
                    context,
                    taskId * 2 + 1,
                    noIntent,
                    PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
                )

                val openIntent = Intent(context, MainActivity::class.java).apply {
                    flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
                    putExtra("SHOW_TASK_PROMPT_ID", taskId)
                }
                val openPendingIntent = PendingIntent.getActivity(
                    context,
                    taskId,
                    openIntent,
                    PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
                )

                val promptText = if (task.customPrompt.isNotEmpty()) task.customPrompt else "Did you complete this task?"

                val stats = db.statsDao.getStatsSync()
                val customSoundUri = stats?.alarmSoundUri

                val builder = NotificationCompat.Builder(context, channelId)
                    .setSmallIcon(com.sooraj.sololeveling.R.drawable.ic_notification)
                    .setContentTitle("\u2694\uFE0F Quest Alert: ${task.title}")
                    .setContentText(promptText)
                    .setPriority(if (isStrict) NotificationCompat.PRIORITY_HIGH else NotificationCompat.PRIORITY_DEFAULT)
                    .setContentIntent(openPendingIntent)
                    .setAutoCancel(!isStrict)
                    .setOngoing(isStrict)
                    .setCategory(NotificationCompat.CATEGORY_ALARM)
                    .addAction(com.sooraj.sololeveling.R.drawable.ic_notification, "YES (Completed)", yesPendingIntent)
                    .addAction(com.sooraj.sololeveling.R.drawable.ic_notification, "NO (Skipped)", noPendingIntent)

                if (customSoundUri?.isNotEmpty() == true) {
                    builder.setSound(android.net.Uri.parse(customSoundUri))
                }

                if (isStrict) {
                    builder.setFullScreenIntent(openPendingIntent, true)
                    builder.setVibrate(longArrayOf(0, 500, 200, 500))
                    builder.setVisibility(NotificationCompat.VISIBILITY_PUBLIC)

                    val vibrator = context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
                    if (vibrator != null && vibrator.hasVibrator()) {
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                            vibrator.vibrate(VibrationEffect.createOneShot(500, VibrationEffect.DEFAULT_AMPLITUDE))
                        } else {
                            @Suppress("DEPRECATION")
                            vibrator.vibrate(500)
                        }
                    }
                }

                notificationManager.notify(taskId, builder.build())
                Log.d("TaskAlarmReceiver", "Notification shown for task $taskId: ${task.title}")
            } catch (e: Exception) {
                Log.e("TaskAlarmReceiver", "Error showing notification for task $taskId", e)
            } finally {
                if (wakeLock.isHeld) wakeLock.release()
                pendingResult.finish()
            }
        }
    }
}
