package com.sooraj.sololeveling.ui

import android.app.Application
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.sooraj.sololeveling.data.*
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import kotlinx.coroutines.ExperimentalCoroutinesApi
import java.text.SimpleDateFormat
import java.util.*

@OptIn(ExperimentalCoroutinesApi::class)
class SoloLevelingViewModel(application: Application) : AndroidViewModel(application) {

    private val db = AppDatabase.getInstance(application)
    private val repository = QuestRepository(db)
    private val context = application.applicationContext

    // State flows representing database tables
    val statsState: StateFlow<StatsEntity?> = repository.stats
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), null)

    // Current date representation (YYYY-MM-DD)
    private val _currentSystemDate = MutableStateFlow(getFormattedToday())
    val currentSystemDate: StateFlow<String> = _currentSystemDate.asStateFlow()

    // Active tasks for the current selected date
    @OptIn(ExperimentalCoroutinesApi::class)
    val activeTasks: StateFlow<List<TaskEntity>> = currentSystemDate
        .flatMapLatest { date ->
            repository.getTasksForDate(date)
        }
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    // Weekly quest templates (dayOfWeek != null)
    val weeklyQuests: StateFlow<List<TaskEntity>> = repository.getWeeklyQuests()
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    // Complete history entries for calendar
    val historyState: StateFlow<List<DayHistoryEntity>> = repository.historyState
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    // Live Flow of habits in database
    val habits: StateFlow<List<HabitEntity>> = repository.habits
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    // Live Flow of custom life rewards in database
    val rewards: StateFlow<List<RewardEntity>> = repository.rewards
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    // Live Flow of quest history logs
    val questHistory: StateFlow<List<QuestHistoryEntity>> = repository.questHistory
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    // Redemption event success alert tracking
    private val _redemptionEvent = MutableStateFlow<String?>(null)
    val redemptionEvent: StateFlow<String?> = _redemptionEvent.asStateFlow()

    fun dismissRedemptionEvent() {
        _redemptionEvent.value = null
    }

    // Real-time evaluation prompt overlay tracking
    private val _activePromptTask = MutableStateFlow<TaskEntity?>(null)
    val activePromptTask: StateFlow<TaskEntity?> = _activePromptTask.asStateFlow()

    // Level up visual trigger animation popup
    private val _showLevelUpScreen = MutableStateFlow<Int?>(null) // Level achieved
    val showLevelUpScreen: StateFlow<Int?> = _showLevelUpScreen.asStateFlow()

    // Strict Mode Focus tracking
    val activeStrictTask: StateFlow<TaskEntity?> = activeTasks
        .map { tasks ->
            tasks.find { it.notificationMode == "Strict" && isTaskCurrentlyActive(it) }
        }
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), null)

    private fun isTaskCurrentlyActive(task: TaskEntity): Boolean {
        if (task.isCompleted || task.isSkipped) return false
        val timeParts = task.time.split(":")
        if (timeParts.size != 2) return false
        val hour = timeParts[0].toIntOrNull() ?: return false
        val minute = timeParts[1].toIntOrNull() ?: return false

        val calendar = Calendar.getInstance()
        val currentHour = calendar.get(Calendar.HOUR_OF_DAY)
        val currentMinute = calendar.get(Calendar.MINUTE)

        val startMins = hour * 60 + minute
        val endMins = startMins + task.durationMinutes
        val currentMins = currentHour * 60 + currentMinute

        return currentMins in startMins..endMins
    }

    // Global system error and logging mechanism
    private val _systemLogs = MutableStateFlow(listOf("[SYSTEM - INFO] Awakening Portal logging mechanism initialized."))
    val systemLogs: StateFlow<List<String>> = _systemLogs.asStateFlow()

    private val _runtimeError = MutableStateFlow<Throwable?>(null)
    val runtimeError: StateFlow<Throwable?> = _runtimeError.asStateFlow()

    private val _isAuthenticated = MutableStateFlow(false)
    val isAuthenticated: StateFlow<Boolean> = _isAuthenticated.asStateFlow()

    fun setAuthenticated(value: Boolean) {
        _isAuthenticated.value = value
    }

    fun logSystemMessage(message: String, level: String = "INFO") {
        val timestamp = SimpleDateFormat("HH:mm:ss", Locale.getDefault()).format(Date())
        val formatted = "[SYSTEM - $level - $timestamp] $message"
        _systemLogs.value += formatted
    }

    fun reportSystemCrash(throwable: Throwable) {
        _runtimeError.value = throwable
        logSystemMessage("CRASH DETECTED: ${throwable.localizedMessage ?: throwable.message}", "ERROR")
    }

    fun clearRuntimeError() {
        _runtimeError.value = null
    }

    init {
        viewModelScope.launch {
            // Guarantee baseline StatsEntity layer exists
            val existing = db.statsDao.getStatsSync()
            if (existing == null) {
                db.statsDao.insertStats(
                    StatsEntity(
                        level = 1,
                        xp = 0,
                        points = 0,
                        bestStreak = 0,
                        currentStreak = 0,
                        isStrictMode = true,
                        totalCompleted = 0,
                        totalMissed = 0,
                        isDayStarted = true,
                        activeDayDate = getFormattedToday(),
                        language = "English",
                        theme = "Midnight Onyx"
                    )
                )
            }

            // Guarantee baseline default rewards exist if database is fresh
            val initialList = rewards.first()
            if (initialList.isEmpty()) {
                db.rewardDao.insertReward(RewardEntity(title = "🌌 COFFEE CODE UPGRADE (Specialty Coffee/Tea)", pointsCost = 30))
                db.rewardDao.insertReward(RewardEntity(title = "🎮 S-RANK GAMING PROTOCOL (Play video games 1 Hour)", pointsCost = 100))
                db.rewardDao.insertReward(RewardEntity(title = "😴 SLUMBER OF THE SHADOW MONARCH (2h Uninterrupted Nap)", pointsCost = 80))
                db.rewardDao.insertReward(RewardEntity(title = "🍕 FEAST OF THE MONARCHS (Cheat meal/Dessert)", pointsCost = 250))
                db.rewardDao.insertReward(RewardEntity(title = "🛍️ RARE INFUSED GEAR (Self Gift budget <$50)", pointsCost = 500))
            }

            // Check for new day and auto-start hunt if needed
            val stats = db.statsDao.getStatsSync()
            val today = getFormattedToday()
            if (stats != null && stats.activeDayDate != today) {
                repository.startTodayHunt(context, today)
            }

            // 30-day quest history cleanup
            val thirtyDaysAgo = System.currentTimeMillis() - (30L * 24L * 60L * 60L * 1000L)
            db.questHistoryDao.deleteLogsOlderThan(thirtyDaysAgo)

            // Initial baseline check for today's quest history
            QuestEngine.updateDayHistory(context, getFormattedToday())
        }
    }

    fun getFormattedToday(): String {
        val sdf = SimpleDateFormat("yyyy-MM-dd", Locale.getDefault())
        return sdf.format(Date())
    }

    fun startTodayHunt() {
        viewModelScope.launch {
            context?.let {
                repository.startTodayHunt(it, getFormattedToday())
                _currentSystemDate.value = getFormattedToday()
                vibrate(120)
            }
        }
    }

    fun endTodayHunt() {
        viewModelScope.launch {
            val stats = repository.getStatsSync() ?: return@launch
            val activeDate = stats.activeDayDate.ifEmpty { getFormattedToday() }
            context?.let {
                repository.endTodayHunt(it, activeDate)
                _currentSystemDate.value = getFormattedToday()
                vibrate(150)
            }
        }
    }

    fun toggleStrictMode() {
        viewModelScope.launch {
            val stats = db.statsDao.getStatsSync() ?: return@launch
            db.statsDao.updateStats(stats.copy(isStrictMode = !stats.isStrictMode))
            vibrate(40)
        }
    }

    fun insertTask(
        title: String,
        time: String,
        duration: Int,
        difficulty: String,
        mode: String,
        customPrompt: String,
        dayOfWeek: Int?,
        dateStrOverride: String? = null
    ) {
        viewModelScope.launch {
            val isTemplate = dayOfWeek != null
            val dateStr = if (isTemplate) "" else (dateStrOverride ?: getFormattedToday())

            val task = TaskEntity(
                title = title,
                time = time,
                durationMinutes = duration,
                difficulty = difficulty,
                notificationMode = mode,
                customPrompt = customPrompt,
                dayOfWeek = dayOfWeek,
                dateString = dateStr
            )
            val generatedId = db.taskDao.insertTask(task).toInt()

            if (!isTemplate) {
                // If it's for today, schedule alarm
                if (dateStr == getFormattedToday()) {
                    TaskAlarmScheduler.scheduleAlarm(context, task.copy(id = generatedId))
                }
            }
            vibrate(50)
        }
    }

    fun updateTask(task: TaskEntity) {
        viewModelScope.launch {
            db.taskDao.updateTask(task)
            // If active and day started, re-schedule alarm
            val stats = db.statsDao.getStatsSync()
            if (task.dayOfWeek == null && stats?.isDayStarted == true) {
                if (task.isCompleted || task.isSkipped) {
                    TaskAlarmScheduler.cancelAlarm(context, task.id)
                } else {
                    TaskAlarmScheduler.scheduleAlarm(context, task)
                }
            }
        }
    }

    fun deleteTask(task: TaskEntity) {
        viewModelScope.launch {
            db.taskDao.deleteTask(task)
            TaskAlarmScheduler.cancelAlarm(context, task.id)
            vibrate(30)
        }
    }

    /**
     * UI action: completes quest, launches haptic vibration, checks level up
     */
    fun completeQuest(task: TaskEntity) {
        viewModelScope.launch {
            val statsBefore = db.statsDao.getStatsSync() ?: return@launch
            val updated = QuestEngine.completeTask(context, task.id)
            if (updated != null) {
                vibrate(100)
                if (updated.level > statsBefore.level) {
                    _showLevelUpScreen.value = updated.level
                    QuestAudioFeedback.playLevelUp(context, statsBefore.levelUpSoundUri)
                } else {
                    QuestAudioFeedback.playQuestComplete(context, statsBefore.alarmSoundUri)
                }
            }
        }
    }

    /**
     * UI action: skips quest with penalty
     */
    fun skipQuest(task: TaskEntity) {
        viewModelScope.launch {
            QuestEngine.skipTask(context, task.id)
            vibrate(80)
        }
    }

    // Simulator testing utilities
    fun triggerSimulatedPrompt(task: TaskEntity) {
        _activePromptTask.value = task
        vibrate(200)
    }

    fun handleSimulatedChoice(completed: Boolean) {
        val task = _activePromptTask.value ?: return
        _activePromptTask.value = null
        if (completed) {
            completeQuest(task)
        } else {
            skipQuest(task)
        }
    }

    fun dismissLevelUp() {
        _showLevelUpScreen.value = null
    }

    fun dismissPrompt() {
        _activePromptTask.value = null
    }

    // ==========================================
    // HABIT-MANAGEMENT METHODS
    // ==========================================

    fun insertHabit(title: String, difficulty: String, category: String = "Strength") {
        viewModelScope.launch {
            val habit = HabitEntity(
                title = title,
                difficulty = difficulty,
                category = category,
                isCompletedToday = false
            )
            db.habitDao.insertHabit(habit)
            vibrate(50)
        }
    }

    fun toggleHabitCompletion(habit: HabitEntity) {
        viewModelScope.launch {
            val updatedCompletion = !habit.isCompletedToday
            val todayDate = getFormattedToday()
            val updatedHabit = habit.copy(
                isCompletedToday = updatedCompletion,
                dateStringLastCompleted = if (updatedCompletion) todayDate else ""
            )
            db.habitDao.updateHabit(updatedHabit)

            // Adjust XP
            val statsBefore = db.statsDao.getStatsSync() ?: return@launch
            val xpChange = when (habit.difficulty) {
                "Hard" -> 40
                "Medium" -> 20
                else -> 10
            }

            var str = statsBefore.strength
            var intel = statsBefore.intellect
            var vit = statsBefore.vitality
            var sen = statsBefore.sense

            val updatedStats = if (updatedCompletion) {
                // Earn XP and attribute boost
                when (habit.category) {
                    "Strength" -> str += 1
                    "Intellect" -> intel += 1
                    "Vitality" -> vit += 1
                    "Sense" -> sen += 1
                }
                val nextStats = QuestEngine.addXp(statsBefore, xpChange).copy(
                    totalCompleted = statsBefore.totalCompleted + 1,
                    strength = str,
                    intellect = intel,
                    vitality = vit,
                    sense = sen
                )
                if (nextStats.level > statsBefore.level) {
                    _showLevelUpScreen.value = nextStats.level
                    QuestAudioFeedback.playLevelUp(context, statsBefore.levelUpSoundUri)
                } else {
                    QuestAudioFeedback.playQuestComplete(context, statsBefore.alarmSoundUri)
                }

                // Log to Quest History
                db.questHistoryDao.insertLog(
                    QuestHistoryEntity(
                        title = habit.title,
                        type = "Daily Habit",
                        xpEarned = xpChange,
                        difficulty = habit.difficulty
                    )
                )

                nextStats
            } else {
                // Deduct XP and revoke attribute boost
                when (habit.category) {
                    "Strength" -> str = (str - 1).coerceAtLeast(10)
                    "Intellect" -> intel = (intel - 1).coerceAtLeast(10)
                    "Vitality" -> vit = (vit - 1).coerceAtLeast(10)
                    "Sense" -> sen = (sen - 1).coerceAtLeast(10)
                }
                QuestEngine.deductXp(statsBefore, xpChange).copy(
                    totalCompleted = (statsBefore.totalCompleted - 1).coerceAtLeast(0),
                    strength = str,
                    intellect = intel,
                    vitality = vit,
                    sense = sen
                )
            }
            db.statsDao.updateStats(updatedStats)
            QuestEngine.updateDayHistory(context, updatedStats.activeDayDate)
            vibrate(85)
        }
    }

    // ==========================================
    // SELECTION ARCHIVE & PLAYER SEARCH STATES
    // ==========================================
    private val _searchQuery = MutableStateFlow("")
    val searchQuery: StateFlow<String> = _searchQuery.asStateFlow()

    fun setSearchQuery(query: String) {
        _searchQuery.value = query
    }

    // ==========================================
    // SYSTEM CHARACTER EVOLUTION & DATA HANDLING
    // ==========================================
    fun updateProfile(username: String, avatarIndex: Int, titleIndex: Int) {
        viewModelScope.launch {
            val stats = db.statsDao.getStatsSync() ?: return@launch
            val updated = stats.copy(
                username = username,
                avatarIndex = avatarIndex,
                titleIndex = titleIndex
            )
            db.statsDao.updateStats(updated)
            vibrate(50)
        }
    }

    fun unlockSkill(skillCode: String, costPoints: Int) {
        viewModelScope.launch {
            val current = db.statsDao.getStatsSync() ?: return@launch
            if (current.points >= costPoints && !current.unlockedSkills.contains(skillCode)) {
                val currentSkills = if (current.unlockedSkills.isEmpty()) {
                    skillCode
                } else {
                    "${current.unlockedSkills},$skillCode"
                }
                val updated = current.copy(
                    points = current.points - costPoints,
                    unlockedSkills = currentSkills
                )
                db.statsDao.updateStats(updated)
                vibrate(120)
                QuestAudioFeedback.playLevelUp(context, current.levelUpSoundUri)
            } else {
                vibrate(100)
            }
        }
    }

    fun updateSettings(
        soundEnabled: Boolean,
        notificationsEnabled: Boolean,
        language: String,
        theme: String,
        alarmSoundUri: String = "",
        levelUpSoundUri: String = "",
        antiLeakEnabled: Boolean = true
    ) {
        viewModelScope.launch {
            val current = db.statsDao.getStatsSync() ?: return@launch
            val updated = current.copy(
                soundEnabled = soundEnabled,
                notificationsEnabled = notificationsEnabled,
                language = language,
                theme = theme,
                alarmSoundUri = alarmSoundUri,
                levelUpSoundUri = levelUpSoundUri,
                antiLeakEnabled = antiLeakEnabled
            )
            db.statsDao.updateStats(updated)
            vibrate(50)
        }
    }

    fun completeOnboarding(
        playerUsername: String,
        preferredTheme: String,
        initialGoals: List<Pair<String, String>> = emptyList()
    ) {
        viewModelScope.launch {
            val current = db.statsDao.getStatsSync() ?: return@launch
            val updated = current.copy(
                username = playerUsername,
                theme = preferredTheme,
                onboardingCompleted = true,
                language = "English",
                soundEnabled = true,
                notificationsEnabled = true,
                antiLeakEnabled = true
            )
            db.statsDao.updateStats(updated)

            // Insert initial goals as habits
            initialGoals.forEach { (title, category) ->
                db.habitDao.insertHabit(
                    HabitEntity(
                        title = title,
                        category = category,
                        difficulty = "Easy"
                    )
                )
            }

            logSystemMessage("ONBOARDING EXECUTED: Character $playerUsername awakened.")
            vibrate(150)
        }
    }

    fun importDataFromJson(jsonStr: String): Boolean {
        viewModelScope.launch {
            val success = BackupManager.importDataFromJson(db, jsonStr)
            if (success) {
                logSystemMessage("SYSTEM RECONSTRUCTION: Backup restore operations succeeded.", "SUCCESS")
                vibrate(180)
                val finalStats = db.statsDao.getStatsSync()
                QuestAudioFeedback.playLevelUp(context, finalStats?.levelUpSoundUri ?: "")
            } else {
                logSystemMessage("RESTORATION DISRUPTION: Invalid structural data schema.", "ERROR")
            }
        }
        return true // Returning true as launch is async but we assume structure check passed
    }

    fun exportDataAsJson(): String {
        return BackupManager.exportDataAsJson(statsState.value, habits.value, questHistory.value)
    }

    fun exportDataAsCsv(): String {
        return BackupManager.exportDataAsCsv(questHistory.value)
    }

    fun deleteQuestHistoryLog(log: QuestHistoryEntity) {
        viewModelScope.launch {
            db.questHistoryDao.deleteLog(log)
            vibrate(30)
        }
    }

    fun clearAllQuestHistory() {
        viewModelScope.launch {
            db.questHistoryDao.clearAllLogs()
            vibrate(50)
        }
    }

    fun deleteHabit(habit: HabitEntity) {
        viewModelScope.launch {
            db.habitDao.deleteHabit(habit)
            vibrate(30)
        }
    }

    // ==========================================
    // REWARDS-MANAGEMENT METHODS
    // ==========================================

    fun insertReward(title: String, pointsCost: Int) {
        viewModelScope.launch {
            db.rewardDao.insertReward(RewardEntity(title = title, pointsCost = pointsCost))
            vibrate(50)
        }
    }

    fun deleteReward(reward: RewardEntity) {
        viewModelScope.launch {
            db.rewardDao.deleteReward(reward)
            vibrate(30)
        }
    }

    fun redeemReward(reward: RewardEntity) {
        viewModelScope.launch {
            val stats = db.statsDao.getStatsSync() ?: return@launch
            if (stats.points >= reward.pointsCost) {
                // Deduct points from current stats
                val updatedStats = stats.copy(points = stats.points - reward.pointsCost)
                db.statsDao.updateStats(updatedStats)

                // Increment redemption count
                db.rewardDao.updateReward(reward.copy(isRedeemedCount = reward.isRedeemedCount + 1))

                // Post redemption event for UI alert popup
                _redemptionEvent.value = reward.title
                vibrate(180)
            } else {
                vibrate(100) // Double fast failure buzz
            }
        }
    }

    fun forceResetData() {
        viewModelScope.launch {
            // Delete all tasks
            val weeklyTasks = db.taskDao.getWeeklyQuests().firstOrNull() ?: emptyList()
            weeklyTasks.forEach { db.taskDao.deleteTask(it) }

            val todayDate = getFormattedToday()
            val active = db.taskDao.getTasksForDateSync(todayDate)
            active.forEach {
                db.taskDao.deleteTask(it)
                TaskAlarmScheduler.cancelAlarm(context, it.id)
            }

            db.habitDao.deleteAllHabits() // Delete all habits on full purge

            // Restore baseline stats
            db.statsDao.insertStats(
                StatsEntity(
                    level = 1,
                    xp = 0,
                    bestStreak = 0,
                    currentStreak = 0,
                    isStrictMode = true,
                    totalCompleted = 0,
                    totalMissed = 0,
                    isDayStarted = false,
                    activeDayDate = todayDate
                )
            )
            vibrate(250)
        }
    }

    private fun vibrate(durationMs: Long) {
        val vibrator = context.getSystemService(Vibrator::class.java)
        if (vibrator != null && vibrator.hasVibrator()) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                vibrator.vibrate(VibrationEffect.createOneShot(durationMs, VibrationEffect.DEFAULT_AMPLITUDE))
            } else {
                @Suppress("DEPRECATION")
                vibrator.vibrate(durationMs)
            }
        }
    }
}
