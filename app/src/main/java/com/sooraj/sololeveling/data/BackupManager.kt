package com.sooraj.sololeveling.data

import org.json.JSONObject
import java.text.SimpleDateFormat
import java.util.*

object BackupManager {

    suspend fun importDataFromJson(db: AppDatabase, jsonStr: String): Boolean {
        return try {
            val json = JSONObject(jsonStr)
            
            // 1. Player Stats
            if (json.has("player_stats")) {
                val p = json.getJSONObject("player_stats")
                val current = db.statsDao.getStatsSync() ?: StatsEntity()
                val attrs = if (p.has("attributes")) p.getJSONObject("attributes") else null

                val updated = current.copy(
                    username = p.optString("username", current.username),
                    level = p.optInt("level", current.level),
                    xp = p.optInt("xp", current.xp),
                    points = p.optInt("points", current.points),
                    currentStreak = p.optInt("current_streak", current.currentStreak),
                    bestStreak = p.optInt("best_streak", current.bestStreak),
                    totalCompleted = p.optInt("total_completed", current.totalCompleted),
                    totalMissed = p.optInt("total_missed", current.totalMissed),
                    strength = attrs?.optInt("strength", current.strength) ?: current.strength,
                    intellect = attrs?.optInt("intellect", current.intellect) ?: current.intellect,
                    vitality = attrs?.optInt("vitality", current.vitality) ?: current.vitality,
                    sense = attrs?.optInt("sense", current.sense) ?: current.sense
                )
                db.statsDao.insertStats(updated)
            }

            // 2. Habits (append or update)
            if (json.has("habits")) {
                val arr = json.getJSONArray("habits")
                for (i in 0 until arr.length()) {
                    val h = arr.getJSONObject(i)
                    db.habitDao.insertHabit(
                        HabitEntity(
                            title = h.getString("title"),
                            category = h.optString("category", "Strength"),
                            difficulty = h.optString("difficulty", "Easy"),
                            isCompletedToday = h.optBoolean("completed_today", false)
                        )
                    )
                }
            }

            // 3. Quest History logs
            if (json.has("quest_history_log")) {
                val arr = json.getJSONArray("quest_history_log")
                for (i in 0 until arr.length()) {
                    val logJson = arr.getJSONObject(i)
                    db.questHistoryDao.insertLog(
                        QuestHistoryEntity(
                            title = logJson.getString("title"),
                            type = logJson.optString("type", "Daily Habit"),
                            difficulty = logJson.optString("difficulty", "Easy"),
                            xpEarned = logJson.optInt("xp_earned", 10),
                            completedAt = logJson.optLong("completed_at", System.currentTimeMillis())
                        )
                    )
                }
            }
            true
        } catch (e: Exception) {
            e.printStackTrace()
            false
        }
    }

    fun exportDataAsJson(stats: StatsEntity?, habitList: List<HabitEntity>, historyList: List<QuestHistoryEntity>): String {
        val sb = StringBuilder()
        sb.append("{\n")
        sb.append("  \"app\": \"Solo Leveling System Check-In Backup\",\n")
        sb.append("  \"exportedAt\": \"${Date()}\",\n")
        sb.append("  \"player_stats\": {\n")
        sb.append("    \"username\": \"${stats?.username ?: "HUNTER_SOORAJ"}\",\n")
        sb.append("    \"level\": ${stats?.level ?: 1},\n")
        sb.append("    \"xp\": ${stats?.xp ?: 0},\n")
        sb.append("    \"points\": ${stats?.points ?: 0},\n")
        sb.append("    \"current_streak\": ${stats?.currentStreak ?: 0},\n")
        sb.append("    \"best_streak\": ${stats?.bestStreak ?: 0},\n")
        sb.append("    \"total_completed\": ${stats?.totalCompleted ?: 0},\n")
        sb.append("    \"total_missed\": ${stats?.totalMissed ?: 0},\n")
        sb.append("    \"attributes\": {\n")
        sb.append("      \"strength\": ${stats?.strength ?: 10},\n")
        sb.append("      \"intellect\": ${stats?.intellect ?: 10},\n")
        sb.append("      \"vitality\": ${stats?.vitality ?: 10},\n")
        sb.append("      \"sense\": ${stats?.sense ?: 10}\n")
        sb.append("    }\n")
        sb.append("  },\n")
        sb.append("  \"habits\": [\n")
        habitList.forEachIndexed { idx, h ->
            sb.append("    {\n")
            sb.append("      \"title\": \"${h.title}\",\n")
            sb.append("      \"category\": \"${h.category}\",\n")
            sb.append("      \"difficulty\": \"${h.difficulty}\",\n")
            sb.append("      \"completed_today\": ${h.isCompletedToday}\n")
            sb.append("    }${if (idx == habitList.lastIndex) "" else ","}\n")
        }
        sb.append("  ],\n")
        sb.append("  \"quest_history_log\": [\n")
        historyList.forEachIndexed { idx, log ->
            sb.append("    {\n")
            sb.append("      \"title\": \"${log.title}\",\n")
            sb.append("      \"type\": \"${log.type}\",\n")
            sb.append("      \"difficulty\": \"${log.difficulty}\",\n")
            sb.append("      \"xp_earned\": ${log.xpEarned},\n")
            sb.append("      \"completed_at\": ${log.completedAt}\n")
            sb.append("    }${if (idx == historyList.lastIndex) "" else ","}\n")
        }
        sb.append("  ]\n")
        sb.append("}")
        return sb.toString()
    }

    fun exportDataAsCsv(historyList: List<QuestHistoryEntity>): String {
        val sb = StringBuilder()
        sb.append("Title,Type,Difficulty,XP Earned,Completed At\n")
        historyList.forEach { log ->
            val cleanTitle = log.title.replace("\"", "\"\"")
            val dateStr = SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault()).format(Date(log.completedAt))
            sb.append("\"$cleanTitle\",${log.type},${log.difficulty},${log.xpEarned},\"$dateStr\"\n")
        }
        return sb.toString()
    }
}
