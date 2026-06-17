package com.sooraj.sololeveling.data

import android.content.Context
import kotlinx.coroutines.flow.Flow

class QuestRepository(private val db: AppDatabase) {

    val stats: Flow<StatsEntity?> = db.statsDao.getStats()
    val habits: Flow<List<HabitEntity>> = db.habitDao.getAllHabits()
    val rewards: Flow<List<RewardEntity>> = db.rewardDao.getAllRewards()
    val historyState: Flow<List<DayHistoryEntity>> = db.dayHistoryDao.getAllHistory()
    val questHistory: Flow<List<QuestHistoryEntity>> = db.questHistoryDao.getAllHistoryLogs()

    fun getTasksForDate(date: String): Flow<List<TaskEntity>> = db.taskDao.getTasksForDate(date)
    
    fun getWeeklyQuests(): Flow<List<TaskEntity>> = db.taskDao.getWeeklyQuests()

    suspend fun insertTask(task: TaskEntity) = db.taskDao.insertTask(task)
    
    suspend fun updateTask(task: TaskEntity) = db.taskDao.updateTask(task)
    
    suspend fun deleteTask(task: TaskEntity) = db.taskDao.deleteTask(task)
    
    suspend fun getStatsSync() = db.statsDao.getStatsSync()
    
    suspend fun updateStats(stats: StatsEntity) = db.statsDao.updateStats(stats)

    suspend fun startTodayHunt(context: Context, todayDate: String) {
        val stats = db.statsDao.getStatsSync() ?: return
        if (stats.isDayStarted && stats.activeDayDate == todayDate) return

        val calendar = java.util.Calendar.getInstance()
        val dayOfWeek = calendar[java.util.Calendar.DAY_OF_WEEK]

        val templates = db.taskDao.getWeeklyQuestsForDaySync(dayOfWeek)
        for (template in templates) {
            val cloned = TaskEntity(
                title = template.title,
                time = template.time,
                durationMinutes = template.durationMinutes,
                difficulty = template.difficulty,
                notificationMode = template.notificationMode,
                customPrompt = template.customPrompt,
                isCompleted = false,
                isSkipped = false,
                dayOfWeek = null,
                dateString = todayDate
            )
            val newId = db.taskDao.insertTask(cloned).toInt()
            TaskAlarmScheduler.scheduleAlarm(context, cloned.copy(id = newId))
        }

        val existingActive = db.taskDao.getTasksForDateSync(todayDate)
        for (task in existingActive) {
            TaskAlarmScheduler.scheduleAlarm(context, task)
        }

        val updatedStats = stats.copy(
            isDayStarted = true,
            activeDayDate = todayDate
        )
        db.statsDao.updateStats(updatedStats)
        db.habitDao.resetAllHabits()
    }

    suspend fun endTodayHunt(context: Context, activeDate: String) {
        val stats = db.statsDao.getStatsSync() ?: return
        val tasks = db.taskDao.getTasksForDateSync(activeDate)
        
        val total = tasks.size
        val completed = tasks.count { it.isCompleted }
        val missed = tasks.count { !it.isCompleted }

        val allQuestsCompleted = (total > 0 && completed == total)
        val newStreak = if (allQuestsCompleted) stats.currentStreak + 1 else 0
        val newBestStreak = if (newStreak > stats.bestStreak) newStreak else stats.bestStreak

        var totalXpLoss = 0
        tasks.forEach {
            if (!it.isCompleted) {
                totalXpLoss += if (stats.isStrictMode) 15 else 5
            }
        }

        val finalXp = (stats.xp - totalXpLoss).coerceAtLeast(0)
        val finalLevel = QuestEngine.getLevelForXp(finalXp)

        val updatedStats = stats.copy(
            isDayStarted = false,
            currentStreak = newStreak,
            bestStreak = newBestStreak,
            totalMissed = stats.totalMissed + missed,
            xp = finalXp,
            level = finalLevel
        )
        db.statsDao.updateStats(updatedStats)
        QuestEngine.updateDayHistory(context, activeDate)
    }
}
