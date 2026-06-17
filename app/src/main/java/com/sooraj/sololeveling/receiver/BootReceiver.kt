package com.sooraj.sololeveling.receiver

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log
import com.sooraj.sololeveling.data.AppDatabase
import com.sooraj.sololeveling.data.TaskAlarmScheduler
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class BootReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action != Intent.ACTION_BOOT_COMPLETED) return

        val pendingResult = goAsync()
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val db = AppDatabase.getInstance(context)
                val stats = db.statsDao.getStatsSync()
                if (stats != null && stats.isDayStarted) {
                    val tasks = db.taskDao.getTasksForDateSync(stats.activeDayDate)
                    for (task in tasks) {
                        if (!task.isCompleted && !task.isSkipped) {
                            TaskAlarmScheduler.scheduleAlarm(context, task)
                        }
                    }
                    Log.d("BootReceiver", "Re-scheduled ${tasks.size} alarms after boot")
                }
            } catch (e: Exception) {
                Log.e("BootReceiver", "Error re-scheduling alarms after boot", e)
            } finally {
                pendingResult.finish()
            }
        }
    }
}
