package com.sooraj.sololeveling.data

import android.content.Context
import android.util.Log

object QuestEngine {

    fun getLevelForXp(xp: Int): Int {
        return when {
            xp >= 5000 -> 7
            xp >= 2000 -> 6
            xp >= 1000 -> 5
            xp >= 500 -> 4
            xp >= 250 -> 3
            xp >= 100 -> 2
            else -> 1
        }
    }

    fun getXpThreshold(level: Int): Int {
        return when (level) {
            1 -> 100
            2 -> 250
            3 -> 500
            4 -> 1000
            5 -> 2000
            6 -> 5000
            else -> 10000 // Progression limit
        }
    }

    fun getXpPrevThreshold(level: Int): Int {
        return when (level) {
            1 -> 0
            2 -> 100
            3 -> 250
            4 -> 500
            5 -> 1000
            6 -> 2000
            7 -> 5000
            else -> 5000
        }
    }

    fun getRankName(level: Int): String {
        return when (level) {
            1 -> "E-Rank Hunter"
            2 -> "D-Rank Hunter"
            3 -> "C-Rank Hunter"
            4 -> "B-Rank Hunter"
            5 -> "A-Rank Hunter"
            6 -> "S-Rank Shadow Monarch"
            7 -> "National Level Hunter"
            else -> "Monarch"
        }
    }

    /**
     * Helper to add XP and compute new level based on thresholds
     */
    fun addXp(stats: StatsEntity, amount: Int): StatsEntity {
        val newXp = stats.xp + amount
        val newLevel = getLevelForXp(newXp)
        val newPoints = stats.points + amount
        return stats.copy(
            xp = newXp,
            level = newLevel,
            points = newPoints
        )
    }

    /**
     * Helper to deduct XP and compute new level based on thresholds
     */
    fun deductXp(stats: StatsEntity, amount: Int): StatsEntity {
        val newXp = (stats.xp - amount).coerceAtLeast(0)
        val newLevel = getLevelForXp(newXp)
        return stats.copy(
            xp = newXp,
            level = newLevel
        )
    }

    /**
     * core processing for completing a task
     */
    suspend fun completeTask(context: Context, taskId: Int): StatsEntity? {
        val db = AppDatabase.getInstance(context)
        val task = db.taskDao.getTaskById(taskId) ?: return null
        if (task.isCompleted || task.isSkipped) return null // Already processed

        val updatedTask = task.copy(isCompleted = true, isSkipped = false)
        db.taskDao.updateTask(updatedTask)

        val stats = db.statsDao.getStatsSync() ?: StatsEntity()
        val xpGain = when (task.difficulty) {
            "Hard" -> 40
            "Medium" -> 20
            else -> 10
        }

        val baseUpdated = addXp(stats, xpGain)
        val updatedStats = baseUpdated.copy(
            totalCompleted = stats.totalCompleted + 1
        )
        db.statsDao.updateStats(updatedStats)

        // Log to Quest History
        db.questHistoryDao.insertLog(
            QuestHistoryEntity(
                title = task.title,
                type = if (task.dayOfWeek != null) "Weekly Quest" else "Daily Quest",
                xpEarned = xpGain,
                difficulty = task.difficulty
            )
        )
        
        // Trigger calendar update (reactive history date tracking)
        updateDayHistory(context, updatedStats.activeDayDate)

        return updatedStats
    }

    /**
     * core processing for skipping/missing a task
     */
    suspend fun skipTask(context: Context, taskId: Int): StatsEntity? {
        val db = AppDatabase.getInstance(context)
        val task = db.taskDao.getTaskById(taskId) ?: return null
        if (task.isCompleted || task.isSkipped) return null // Already processed

        val updatedTask = task.copy(isCompleted = false, isSkipped = true)
        db.taskDao.updateTask(updatedTask)

        val stats = db.statsDao.getStatsSync() ?: StatsEntity()
        val xpPenalty = if (stats.isStrictMode) 15 else 5

        // Count misses today
        val activeDate = stats.activeDayDate
        val todayTasks = db.taskDao.getTasksForDateSync(activeDate)
        val missedCount = todayTasks.count { it.isSkipped } + 1 // Add this new skipped task

        // Check if streak resets: Miss 2+ tasks in a day -> STREAK RESET
        val finalStreak = if (missedCount >= 2) 0 else stats.currentStreak

        val baseUpdated = deductXp(stats, xpPenalty)
        val updatedStats = baseUpdated.copy(
            totalMissed = stats.totalMissed + 1,
            currentStreak = finalStreak
        )
        db.statsDao.updateStats(updatedStats)

        // Trigger calendar update
        updateDayHistory(context, activeDate)

        return updatedStats
    }

    /**
     * Recalculates and updates Day History based on current active state
     */
    suspend fun updateDayHistory(context: Context, date: String) {
        if (date.isEmpty()) return
        val db = AppDatabase.getInstance(context)
        val tasks = db.taskDao.getTasksForDateSync(date)
        val stats = db.statsDao.getStatsSync() ?: return

        val completed = tasks.count { it.isCompleted }
        val missed = tasks.count { it.isSkipped || (!it.isCompleted && isTaskOverdue(it)) }

        // Green -> perfect day (0 missed, and has at least some completed tasks)
        // Yellow -> 1 missed
        // Red -> failed (2+ missed)
        val status = when {
            missed >= 2 -> "FAILED"
            missed == 1 -> "PARTIAL"
            completed > 0 -> "PERFECT"
            else -> "FAILED" // Default if no tasks done
        }

        // Calculate estimated XP gained for this date based on difficulty of completed
        var xpEarned = 0
        tasks.filter { it.isCompleted }.forEach {
            xpEarned += when(it.difficulty) {
                "Hard" -> 40
                "Medium" -> 20
                else -> 10
            }
        }

        val history = DayHistoryEntity(
            dateString = date,
            tasksCompleted = completed,
            tasksMissed = missed,
            xpEarned = xpEarned,
            status = status
        )
        db.dayHistoryDao.insertHistory(history)
    }

    private fun isTaskOverdue(task: TaskEntity): Boolean {
        if (task.isCompleted || task.isSkipped) return false
        val timeParts = task.time.split(":")
        if (timeParts.size != 2) return false
        val hour = timeParts[0].toIntOrNull() ?: return false
        val minute = timeParts[1].toIntOrNull() ?: return false

        val calendar = java.util.Calendar.getInstance()
        val currentHour = calendar.get(java.util.Calendar.HOUR_OF_DAY)
        val currentMinute = calendar.get(java.util.Calendar.MINUTE)

        val taskTotalMinutes = hour * 60 + minute + task.durationMinutes
        val currentTotalMinutes = currentHour * 60 + currentMinute

        return currentTotalMinutes > taskTotalMinutes
    }
}
