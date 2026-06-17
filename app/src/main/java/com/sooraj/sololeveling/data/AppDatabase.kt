package com.sooraj.sololeveling.data

import android.content.Context
import androidx.room.*
import androidx.sqlite.db.SupportSQLiteDatabase
import kotlinx.coroutines.flow.Flow
import net.sqlcipher.database.SQLiteDatabase
import net.sqlcipher.database.SupportFactory

// ==========================================
// ENTITIES
// ==========================================

@Entity(tableName = "tasks")
data class TaskEntity(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val title: String,
    val time: String, // HH:mm format
    val durationMinutes: Int = 30,
    val difficulty: String = "Easy", // Easy, Medium, Hard
    val notificationMode: String = "Smart", // Strict, Smart, Off
    val customPrompt: String = "", // Did you do X?
    val isCompleted: Boolean = false,
    val isSkipped: Boolean = false,
    val dayOfWeek: Int? = null, // 1 to 7 (Sunday to Saturday) if template for Weekly Quest. Null if Today's active task.
    val dateString: String = "" // YYYY-MM-DD for active tasks, empty for weekly templates
)

@Entity(tableName = "stats")
data class StatsEntity(
    @PrimaryKey val id: Int = 1,
    val level: Int = 1,
    val xp: Int = 0,
    val points: Int = 0, // Redeemable points currency
    val bestStreak: Int = 0,
    val currentStreak: Int = 0,
    val isStrictMode: Boolean = true, // Control Switch Strict/Flex
    val totalCompleted: Int = 0,
    val totalMissed: Int = 0,
    val isDayStarted: Boolean = true,
    val activeDayDate: String = "", // YYYY-MM-DD
    val username: String = "HUNTER_SOORAJ",
    val avatarIndex: Int = 0,
    val titleIndex: Int = 0,
    val strength: Int = 10,
    val intellect: Int = 10,
    val vitality: Int = 10,
    val sense: Int = 10,
    val unlockedSkills: String = "", // comma-separated skill codes
    val soundEnabled: Boolean = true,
    val notificationsEnabled: Boolean = true,
    val language: String = "English",
    val theme: String = "Midnight Onyx",
    val onboardingCompleted: Boolean = false,
    val alarmSoundUri: String = "", // URI for custom alarm sound
    val levelUpSoundUri: String = "", // URI for custom level up sound
    val antiLeakEnabled: Boolean = true // Anti-Leak Protocol (FLAG_SECURE)
)

@Entity(tableName = "day_history")
data class DayHistoryEntity(
    @PrimaryKey val dateString: String, // YYYY-MM-DD
    val tasksCompleted: Int = 0,
    val tasksMissed: Int = 0,
    val xpEarned: Int = 0,
    val status: String = "FAILED" // PERFECT, PARTIAL, FAILED
)

@Entity(tableName = "habits")
data class HabitEntity(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val title: String,
    val difficulty: String = "Easy", // Easy, Medium, Hard
    val isCompletedToday: Boolean = false,
    val dateStringLastCompleted: String = "", // format: YYYY-MM-DD used to track day of toggle
    val category: String = "Strength" // Strength, Intellect, Vitality, Sense
)

@Entity(tableName = "rewards")
data class RewardEntity(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val title: String,
    val pointsCost: Int = 50,
    val isRedeemedCount: Int = 0
)

@Entity(tableName = "quest_history")
data class QuestHistoryEntity(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val title: String,
    val type: String, // "Daily Quest", "Weekly Quest", "Daily Habit"
    val completedAt: Long = System.currentTimeMillis(),
    val xpEarned: Int,
    val difficulty: String = "Easy"
)

// ==========================================
// DAOS
// ==========================================

@Dao
interface TaskDao {
    @Query("SELECT * FROM tasks WHERE dayOfWeek IS NULL AND dateString = :date ORDER BY time ASC")
    fun getTasksForDate(date: String): Flow<List<TaskEntity>>

    @Query("SELECT * FROM tasks WHERE dayOfWeek IS NULL AND dateString = :date ORDER BY time ASC")
    suspend fun getTasksForDateSync(date: String): List<TaskEntity>

    @Query("SELECT * FROM tasks WHERE dayOfWeek IS NOT NULL ORDER BY dayOfWeek ASC, time ASC")
    fun getWeeklyQuests(): Flow<List<TaskEntity>>

    @Query("SELECT * FROM tasks WHERE dayOfWeek = :dayOfWeek ORDER BY time ASC")
    suspend fun getWeeklyQuestsForDaySync(dayOfWeek: Int): List<TaskEntity>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertTask(task: TaskEntity): Long

    @Update
    suspend fun updateTask(task: TaskEntity)

    @Delete
    suspend fun deleteTask(task: TaskEntity)

    @Query("DELETE FROM tasks WHERE id = :id")
    suspend fun deleteTaskById(id: Int)

    @Query("SELECT * FROM tasks WHERE id = :id")
    suspend fun getTaskById(id: Int): TaskEntity?
}

@Dao
interface StatsDao {
    @Query("SELECT * FROM stats WHERE id = 1")
    fun getStats(): Flow<StatsEntity?>

    @Query("SELECT * FROM stats WHERE id = 1")
    suspend fun getStatsSync(): StatsEntity?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertStats(stats: StatsEntity)

    @Update
    suspend fun updateStats(stats: StatsEntity)
}

@Dao
interface DayHistoryDao {
    @Query("SELECT * FROM day_history ORDER BY dateString DESC")
    fun getAllHistory(): Flow<List<DayHistoryEntity>>

    @Query("SELECT * FROM day_history WHERE dateString = :date")
    suspend fun getHistoryForDate(date: String): DayHistoryEntity?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertHistory(history: DayHistoryEntity)
}

@Dao
interface HabitDao {
    @Query("SELECT * FROM habits ORDER BY id ASC")
    fun getAllHabits(): Flow<List<HabitEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertHabit(habit: HabitEntity): Long

    @Update
    suspend fun updateHabit(habit: HabitEntity)

    @Delete
    suspend fun deleteHabit(habit: HabitEntity)

    @Query("SELECT * FROM habits WHERE id = :id")
    suspend fun getHabitById(id: Int): HabitEntity?

    @Query("UPDATE habits SET isCompletedToday = 0, dateStringLastCompleted = ''")
    suspend fun resetAllHabits()

    @Query("DELETE FROM habits")
    suspend fun deleteAllHabits()
}

@Dao
interface RewardDao {
    @Query("SELECT * FROM rewards ORDER BY id ASC")
    fun getAllRewards(): Flow<List<RewardEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertReward(reward: RewardEntity): Long

    @Update
    suspend fun updateReward(reward: RewardEntity)

    @Delete
    suspend fun deleteReward(reward: RewardEntity)
}

@Dao
interface QuestHistoryDao {
    @Query("SELECT * FROM quest_history ORDER BY completedAt DESC")
    fun getAllHistoryLogs(): Flow<List<QuestHistoryEntity>>

    @Query("SELECT * FROM quest_history WHERE completedAt >= :timestampThreshold ORDER BY completedAt DESC")
    fun getHistoryLogsSince(timestampThreshold: Long): Flow<List<QuestHistoryEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertLog(log: QuestHistoryEntity): Long

    @Delete
    suspend fun deleteLog(log: QuestHistoryEntity)

    @Query("DELETE FROM quest_history WHERE completedAt < :timestampThreshold")
    suspend fun deleteLogsOlderThan(timestampThreshold: Long)

    @Query("DELETE FROM quest_history")
    suspend fun clearAllLogs()
}

// ==========================================
// DATABASE
// ==========================================

@Database(
    entities = [TaskEntity::class, StatsEntity::class, DayHistoryEntity::class, HabitEntity::class, RewardEntity::class, QuestHistoryEntity::class],
    version = 7,
    exportSchema = false
)
abstract class AppDatabase : RoomDatabase() {
    abstract val taskDao: TaskDao
    abstract val statsDao: StatsDao
    abstract val dayHistoryDao: DayHistoryDao
    abstract val habitDao: HabitDao
    abstract val rewardDao: RewardDao
    abstract val questHistoryDao: QuestHistoryDao

    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null

        fun getInstance(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val passphrase = SecurityManager.getDatabasePassphrase(context)
                val factory = SupportFactory(passphrase)
                
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "solo_leveling_db"
                )
                    .openHelperFactory(factory)
                    .fallbackToDestructiveMigration(true)
                    .build()
                INSTANCE = instance
                instance
            }
        }
    }
}
