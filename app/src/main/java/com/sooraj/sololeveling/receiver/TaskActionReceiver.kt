package com.sooraj.sololeveling.receiver

import android.app.NotificationManager
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log
import com.sooraj.sololeveling.data.QuestEngine
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class TaskActionReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        val taskId = intent.getIntExtra("TASK_ID", -1)
        if (taskId == -1) return

        val action = intent.action ?: return

        val notificationManager =
            context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.cancel(taskId)

        val pendingResult = goAsync()
        CoroutineScope(Dispatchers.IO).launch {
            try {
                if (action == "ACTION_YES") {
                    QuestEngine.completeTask(context, taskId)
                } else if (action == "ACTION_NO") {
                    QuestEngine.skipTask(context, taskId)
                }
            } catch (e: Exception) {
                Log.e("TaskActionReceiver", "Error processing notification action: $action", e)
            } finally {
                pendingResult.finish()
            }
        }
    }
}
