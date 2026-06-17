package com.sooraj.sololeveling.ui

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.media.RingtoneManager
import android.net.Uri
import android.os.Build
import android.widget.Toast
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.animation.*
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CutCornerShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalClipboardManager
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.sooraj.sololeveling.data.QuestEngine
import com.sooraj.sololeveling.ui.theme.*
import java.util.Calendar
import java.util.Date
import java.util.Locale

@Composable
fun ProfileScreen(
    viewModel: SoloLevelingViewModel
) {
    val stats by viewModel.statsState.collectAsState()
    val context = LocalContext.current
    val clipboardManager = LocalClipboardManager.current

    // Current state values
    val currentLevel = stats?.level ?: 1
    val currentXp = stats?.xp ?: 0
    val pointsBalance = stats?.points ?: 0
    val currentUsername = stats?.username ?: "HUNTER_SOORAJ"
    val avatarIndex = stats?.avatarIndex ?: 0
    val titleIndex = stats?.titleIndex ?: 0
    val strVal = stats?.strength ?: 10
    val intVal = stats?.intellect ?: 10
    val vitVal = stats?.vitality ?: 10
    val senVal = stats?.sense ?: 10
    val soundEnabled = stats?.soundEnabled ?: true
    val notifEnabled = stats?.notificationsEnabled ?: true
    val currentLang = stats?.language ?: "English"
    val currentTheme = stats?.theme ?: "Cosmic Slate"
    val unlockedSkills = stats?.unlockedSkills ?: ""

    // Profile screen sub-navigation
    var activeTab by remember { mutableStateOf("Character") } // Character, Achievements, Analytics, Settings

    // Edit Name Modal State
    var showEditNameDialog by remember { mutableStateOf(false) }
    var tempNameInput by remember { mutableStateOf(currentUsername) }

    // Dialog state for code export backup
    var showBackupDialog by remember { mutableStateOf<String?>(null) } // null or json/csv text

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(SpaceBlack)
            .elegantDarkGlow()
            .padding(16.dp)
    ) {
        Column(
            modifier = Modifier.fillMaxSize()
        ) {
            Spacer(modifier = Modifier.height(24.dp))

            // Screen Header
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = "🧬 STATUS MENU WINDOW",
                        color = ElectricCyan,
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                    Text(
                        text = "Player Dashboard",
                        color = TextWhite,
                        fontSize = 20.sp,
                        fontWeight = FontWeight.ExtraBold
                    )
                }

                // Points status
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier
                        .clip(RoundedCornerShape(8.dp))
                        .background(DarkNavy)
                        .border(1.dp, ShadowGrey, RoundedCornerShape(8.dp))
                        .padding(horizontal = 8.dp, vertical = 4.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.MonetizationOn,
                        contentDescription = "Points",
                        tint = HunterYellow,
                        modifier = Modifier.size(16.dp)
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = "$pointsBalance PTS",
                        color = HunterYellow,
                        fontSize = 11.sp,
                        fontFamily = FontFamily.Monospace,
                        fontWeight = FontWeight.Bold
                    )
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Sub Navigation Tab Indicator Matrix
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(10.dp))
                    .background(DarkNavy)
                    .border(1.dp, ShadowGrey, RoundedCornerShape(10.dp))
                    .padding(4.dp),
                horizontalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                val tabItems = listOf(
                    Triple("Character", "CHARACTER", Icons.Default.Person),
                    Triple("Achievements", "CHALLENGES", Icons.Default.EmojiEvents),
                    Triple("Analytics", "INTELLIGENCE", Icons.Default.QueryStats),
                    Triple("Settings", "SYSTEM DECK", Icons.Default.Settings)
                )

                tabItems.forEach { (tabId, label, icon) ->
                    val isSelected = activeTab == tabId
                    Box(
                        modifier = Modifier
                            .weight(1f)
                            .clip(RoundedCornerShape(8.dp))
                            .background(if (isSelected) ShadowPurple.copy(alpha = 0.3f) else Color.Transparent)
                            .border(
                                1.dp,
                                if (isSelected) ElectricCyan.copy(alpha = 0.5f) else Color.Transparent,
                                RoundedCornerShape(8.dp)
                            )
                            .clickable { activeTab = tabId }
                            .padding(vertical = 8.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Icon(
                                imageVector = icon,
                                contentDescription = label,
                                tint = if (isSelected) ElectricCyan else TextMuted,
                                modifier = Modifier.size(16.dp)
                            )
                            Spacer(modifier = Modifier.height(2.dp))
                            Text(
                                text = label,
                                color = if (isSelected) TextWhite else TextMuted,
                                fontSize = 8.sp,
                                fontWeight = FontWeight.Bold,
                                fontFamily = FontFamily.Monospace
                            )
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Scrollable Content Pane based on selected Tab
            Box(modifier = Modifier.weight(1f)) {
                when (activeTab) {
                    "Character" -> {
                        CharacterTabContent(
                            viewModel = viewModel,
                            currentUsername = currentUsername,
                            currentLevel = currentLevel,
                            avatarIndex = avatarIndex,
                            titleIndex = titleIndex,
                            strVal = strVal,
                            intVal = intVal,
                            vitVal = vitVal,
                            senVal = senVal,
                            pointsBalance = pointsBalance,
                            unlockedSkills = unlockedSkills,
                            onEditNameClick = {
                                tempNameInput = currentUsername
                                showEditNameDialog = true
                            }
                        )
                    }
                    "Achievements" -> {
                        AchievementsTabContent(
                            currentLevel = currentLevel,
                            currentXp = currentXp,
                            strVal = strVal,
                            intVal = intVal,
                            vitVal = vitVal,
                            senVal = senVal,
                            totalCompleted = stats?.totalCompleted ?: 0,
                            bestStreak = stats?.bestStreak ?: 0
                        )
                    }
                    "Analytics" -> {
                        AnalyticsTabContent(
                            viewModel = viewModel,
                            totalCompleted = stats?.totalCompleted ?: 0,
                            totalMissed = stats?.totalMissed ?: 0,
                            bestStreak = stats?.bestStreak ?: 0,
                            strVal = strVal,
                            intVal = intVal,
                            vitVal = vitVal,
                            senVal = senVal,
                            totalXp = currentXp
                        )
                    }
                    "Settings" -> {
                        SettingsTabContent(
                            viewModel = viewModel,
                            soundEnabled = soundEnabled,
                            notifEnabled = notifEnabled,
                            antiLeakEnabled = stats?.antiLeakEnabled ?: true,
                            currentLang = currentLang,
                            currentTheme = currentTheme,
                            alarmSoundUri = stats?.alarmSoundUri ?: "",
                            levelUpSoundUri = stats?.levelUpSoundUri ?: "",
                            onTriggerBackup = {
                                val jsonString = viewModel.exportDataAsJson()
                                showBackupDialog = jsonString
                            },
                            onTriggerCsvExport = {
                                val csvText = viewModel.exportDataAsCsv()
                                showBackupDialog = csvText
                            }
                        )
                    }
                }
            }
        }

        // --- SUB NAME EDIT DIALOG POPUP ---
        if (showEditNameDialog) {
            AlertDialog(
                onDismissRequest = { showEditNameDialog = false },
                title = {
                    Text("📝 EDIT HUNTER ID CARD", color = ElectricCyan, fontFamily = FontFamily.Monospace, fontSize = 14.sp)
                },
                text = {
                    Column {
                        Text("Provide a new player classification identity to update the system metadata.", color = TextMuted, fontSize = 11.sp)
                        Spacer(modifier = Modifier.height(12.dp))
                        OutlinedTextField(
                            value = tempNameInput,
                            onValueChange = { tempNameInput = it },
                            singleLine = true,
                            label = { Text("Hunter Codename", color = TextMuted) },
                            colors = OutlinedTextFieldDefaults.colors(
                                focusedTextColor = TextWhite,
                                unfocusedTextColor = TextWhite,
                                focusedBorderColor = ElectricCyan,
                                unfocusedBorderColor = ShadowGrey
                            )
                        )
                    }
                },
                containerColor = DarkNavy,
                shape = RoundedCornerShape(16.dp),
                confirmButton = {
                    Button(
                        onClick = {
                            if (tempNameInput.isNotBlank()) {
                                viewModel.updateProfile(tempNameInput.trim(), avatarIndex, titleIndex)
                                showEditNameDialog = false
                            }
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = ShadowPurple)
                    ) {
                        Text("PROCEED", color = TextWhite, fontFamily = FontFamily.Monospace, fontSize = 11.sp)
                    }
                },
                dismissButton = {
                    TextButton(onClick = { showEditNameDialog = false }) {
                        Text("ABORT", color = TextMuted, fontFamily = FontFamily.Monospace, fontSize = 11.sp)
                    }
                }
            )
        }

        // --- EXPORT BACKUP POPUP WINDOW ---
        showBackupDialog?.let { dataText ->
            val isCsv = dataText.startsWith("Title")
            AlertDialog(
                onDismissRequest = { showBackupDialog = null },
                title = {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(
                            imageVector = if (isCsv) Icons.Default.TableChart else Icons.Default.DataObject,
                            contentDescription = null,
                            tint = ElectricCyan,
                            modifier = Modifier.size(20.dp)
                        )
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            text = if (isCsv) "📊 EXPORT: QUEST LOGS .CSV" else "🗄️ BACKUP: PLAYER STATUS .JSON",
                            color = TextWhite,
                            fontFamily = FontFamily.Monospace,
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold
                        )
                    }
                },
                text = {
                    Column {
                        Text(
                            text = "Copied to clipboard! You can also share the exported text directly.",
                            color = TextMuted,
                            fontSize = 11.sp
                        )
                        Spacer(modifier = Modifier.height(10.dp))
                        Box(
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(160.dp)
                                .clip(RoundedCornerShape(8.dp))
                                .background(SpaceBlack)
                                .border(1.dp, ShadowGrey, RoundedCornerShape(8.dp))
                                .padding(8.dp)
                                .verticalScroll(rememberScrollState())
                        ) {
                            Text(
                                text = dataText,
                                color = LuminousCyan,
                                fontSize = 9.sp,
                                fontFamily = FontFamily.Monospace,
                                lineHeight = 12.sp
                            )
                        }
                    }
                },
                containerColor = DarkNavy,
                shape = RoundedCornerShape(16.dp),
                confirmButton = {
                    Button(
                        onClick = {
                            // Copy to Clipboard
                            clipboardManager.setText(AnnotatedString(dataText))
                            Toast.makeText(context, "SECURITY ALERT: Backup copied to clipboard. Secure this text immediately!", Toast.LENGTH_LONG).show()

                            // Fire system Share sheet
                            val shareIntent = Intent().apply {
                                action = Intent.ACTION_SEND
                                type = "text/plain"
                                putExtra(Intent.EXTRA_TEXT, dataText)
                                putExtra(Intent.EXTRA_SUBJECT, if (isCsv) "Quests_Backup.csv" else "Hunter_System_Backup.json")
                            }
                            context.startActivity(Intent.createChooser(shareIntent, "Share Hunter Backup Logs"))
                            showBackupDialog = null
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = ShadowPurple)
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(Icons.Default.Share, contentDescription = null, modifier = Modifier.size(12.dp), tint = TextWhite)
                            Spacer(modifier = Modifier.width(4.dp))
                            Text("SHARE", color = TextWhite, fontFamily = FontFamily.Monospace, fontSize = 10.sp)
                        }
                    }
                },
                dismissButton = {
                    TextButton(onClick = { showBackupDialog = null }) {
                        Text("CLOSE", color = TextMuted, fontFamily = FontFamily.Monospace, fontSize = 11.sp)
                    }
                }
            )
        }
    }
}

// ======================================================================
// TAB CONTENT 1: CHARACTER MATRIX (AVATARS, TITLES, ATTRIBUTES, SKILL TREE)
// ======================================================================
@Composable
fun CharacterTabContent(
    viewModel: SoloLevelingViewModel,
    currentUsername: String,
    currentLevel: Int,
    avatarIndex: Int,
    titleIndex: Int,
    strVal: Int,
    intVal: Int,
    vitVal: Int,
    senVal: Int,
    pointsBalance: Int,
    unlockedSkills: String,
    onEditNameClick: () -> Unit
) {
    // Local avatar representations
    val avatars = listOf(
        Icons.Default.Shield,            // 0: Commander Shield
        Icons.Default.FlashOn,           // 1: Flash Pulse
        Icons.Default.AutoAwesome,       // 2: Magic Cosmos
        Icons.Default.Palette,           // 3: Designer
        Icons.Default.EmojiEvents,       // 4: Monarch
        Icons.Default.SportsMartialArts  // 5: Shadow Strike
    )

    // Unlocked and Available Titles list
    val titleList = listOf(
        "The Weakest Hunter" to (true), // Always unlocked
        "S-Rank Survivor" to (currentLevel >= 3),
        "Shadow Commander" to (currentLevel >= 5),
        "Iron Will Hero" to (vitVal >= 15),
        "Demon Slayer" to (strVal >= 15),
        "National Level Monarch" to (currentLevel >= 7)
    )

    var showAvatarPicker by remember { mutableStateOf(false) }
    var showTitlePicker by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState()),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {

        // --- SUB SECTION: HUNTER LICENSE CARD ---
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(16.dp))
                .background(
                    Brush.verticalGradient(
                        listOf(DarkNavy, SpaceBlack)
                    )
                )
                .border(2.dp, ShadowPurple.copy(alpha = 0.5f), RoundedCornerShape(16.dp))
                .padding(16.dp)
        ) {
            Column {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "🎖️ SYSTEM HUNTER LICENSE",
                        color = LuminousCyan,
                        fontSize = 10.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )

                    // Edit button
                    Row(
                        modifier = Modifier.clickable { onEditNameClick() },
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(Icons.Default.Edit, contentDescription = "Edit Name", tint = ElectricCyan, modifier = Modifier.size(12.dp))
                        Spacer(modifier = Modifier.width(3.dp))
                        Text("RECLASSIFY", color = ElectricCyan, fontSize = 9.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                    }
                }

                Spacer(modifier = Modifier.height(12.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    // Emblem Circle
                    Box(
                        modifier = Modifier
                            .size(72.dp)
                            .clip(RoundedCornerShape(72.dp))
                            .background(Brush.radialGradient(listOf(ShadowPurple.copy(alpha = 0.4f), Color.Transparent)))
                            .border(1.5.dp, ElectricCyan, RoundedCornerShape(72.dp))
                            .clickable { showAvatarPicker = true },
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = avatars.getOrElse(avatarIndex) { Icons.Default.Shield },
                            contentDescription = "Active Avatar",
                            tint = LuminousCyan,
                            modifier = Modifier.size(36.dp)
                        )
                        Box(
                            modifier = Modifier
                                .fillMaxSize()
                                .padding(4.dp),
                            contentAlignment = Alignment.BottomEnd
                        ) {
                            Icon(Icons.Default.Cached, contentDescription = null, tint = ElectricCyan.copy(alpha = 0.8f), modifier = Modifier.size(12.dp))
                        }
                    }

                    Spacer(modifier = Modifier.width(16.dp))

                    Column {
                        Text(
                            text = currentUsername.uppercase(),
                            color = TextWhite,
                            fontSize = 16.sp,
                            fontWeight = FontWeight.ExtraBold,
                            fontFamily = FontFamily.Monospace
                        )

                        Spacer(modifier = Modifier.height(4.dp))

                        // Selected Title Equip action
                        val activeTitle = titleList.getOrNull(titleIndex)?.first ?: "The Weakest Hunter"
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            modifier = Modifier
                                .clip(RoundedCornerShape(4.dp))
                                .background(ShadowPurple.copy(alpha = 0.2f))
                                .border(1.dp, ShadowPurple.copy(alpha = 0.5f), RoundedCornerShape(4.dp))
                                .clickable { showTitlePicker = true }
                                .padding(horizontal = 6.dp, vertical = 2.dp)
                        ) {
                            Text(
                                text = "TITLE: $activeTitle",
                                color = HunterYellow,
                                fontSize = 9.sp,
                                fontFamily = FontFamily.Monospace,
                                fontWeight = FontWeight.Bold
                            )
                            Spacer(modifier = Modifier.width(4.dp))
                            Icon(Icons.Default.ArrowDropDown, contentDescription = null, tint = HunterYellow, modifier = Modifier.size(10.dp))
                        }

                        Spacer(modifier = Modifier.height(4.dp))

                        Text(
                            text = QuestEngine.getRankName(currentLevel).uppercase() + " (CLASS S)",
                            color = ElectricCyan,
                            fontSize = 11.sp,
                            fontWeight = FontWeight.ExtraBold,
                            fontFamily = FontFamily.Monospace
                        )
                    }
                }
            }
        }

        // --- SUB SECTION: SYSTEM AVATAR SELECTOR LIST ---
        if (showAvatarPicker) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(12.dp))
                    .background(DarkNavy)
                    .border(1.dp, ShadowGrey, RoundedCornerShape(12.dp))
                    .padding(12.dp)
            ) {
                Column {
                    Text("SELECT SYSTEM EMBLEM LOGO:", color = TextWhite, fontSize = 10.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                    Spacer(modifier = Modifier.height(8.dp))
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        avatars.forEachIndexed { idx, icon ->
                            val isSelected = avatarIndex == idx
                            Box(
                                modifier = Modifier
                                    .size(36.dp)
                                    .clip(RoundedCornerShape(36.dp))
                                    .background(if (isSelected) ShadowPurple.copy(alpha = 0.5f) else SpaceBlack)
                                    .border(1.dp, if (isSelected) ElectricCyan else ShadowGrey, RoundedCornerShape(36.dp))
                                    .clickable {
                                        viewModel.updateProfile(currentUsername, idx, titleIndex)
                                        showAvatarPicker = false
                                    },
                                contentAlignment = Alignment.Center
                            ) {
                                Icon(imageVector = icon, contentDescription = null, tint = if (isSelected) ElectricCyan else TextMuted, modifier = Modifier.size(18.dp))
                            }
                        }
                    }
                }
            }
        }

        // --- SUB SECTION: TITLE SELECTOR DROPDOWN ---
        if (showTitlePicker) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(12.dp))
                    .background(DarkNavy)
                    .border(1.dp, ShadowGrey, RoundedCornerShape(12.dp))
                    .padding(12.dp)
            ) {
                Column {
                    Text("EQUIP UNLOCKED TITLE:", color = TextWhite, fontSize = 10.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                    Spacer(modifier = Modifier.height(6.dp))
                    Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                        titleList.forEachIndexed { idx, (title, isUnlocked) ->
                            val isEquipped = titleIndex == idx
                            Row(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .clip(RoundedCornerShape(6.dp))
                                    .background(if (isEquipped) ShadowPurple.copy(alpha = 0.2f) else SpaceBlack.copy(alpha = 0.4f))
                                    .clickable(enabled = isUnlocked) {
                                        viewModel.updateProfile(currentUsername, avatarIndex, idx)
                                        showTitlePicker = false
                                    }
                                    .padding(8.dp),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Text(
                                    text = title,
                                    color = if (isUnlocked) TextWhite else TextMuted.copy(alpha = 0.5f),
                                    fontSize = 11.sp,
                                    fontWeight = FontWeight.Bold,
                                    fontFamily = FontFamily.Monospace
                                )
                                Text(
                                    text = if (isEquipped) "EQUIPPED" else if (isUnlocked) "SELECT" else "LOCKED",
                                    color = if (isEquipped) ElectricCyan else if (isUnlocked) HunterGreen else HunterRed,
                                    fontSize = 9.sp,
                                    fontFamily = FontFamily.Monospace,
                                    fontWeight = FontWeight.Bold
                                )
                            }
                        }
                    }
                }
            }
        }

        // --- SUB SECTION: CHARACTER ATTRIBUTES ---
        Card(
            colors = CardDefaults.cardColors(containerColor = DarkNavy.copy(alpha = 0.6f)),
            border = borderStrokeDefault(),
            shape = RoundedCornerShape(16.dp)
        ) {
            Column(modifier = Modifier.padding(16.dp)) {
                Text(
                    text = "💪 CHARACTER STAT SUMMARY",
                    color = TextWhite,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Bold,
                    fontFamily = FontFamily.Monospace
                )
                Spacer(modifier = Modifier.height(12.dp))

                val attributeList = listOf(
                    Quadruple("STRENGTH (STR)", strVal, "Governs raw daily habit completion stamina", HunterRed),
                    Quadruple("INTELLECT (INT)", intVal, "Upgraded on knowledge & coding habits", ElectricCyan),
                    Quadruple("VITALITY (VIT)", vitVal, "Strengthened on fitness and sleep habits", HunterGreen),
                    Quadruple("SENSE (SEN)", senVal, "Elevated on planning & awareness habits", HunterYellow)
                )

                attributeList.forEach { (label, value, desc, tint) ->
                    Column(modifier = Modifier.padding(vertical = 4.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Column {
                                Text(text = label, color = TextWhite, fontSize = 11.sp, fontWeight = FontWeight.Bold)
                                Text(text = desc, color = TextMuted, fontSize = 9.sp)
                            }
                            Text(
                                text = "$value PTS",
                                color = tint,
                                fontSize = 13.sp,
                                fontWeight = FontWeight.ExtraBold,
                                fontFamily = FontFamily.Monospace
                            )
                        }
                        Spacer(modifier = Modifier.height(4.dp))
                        LinearProgressIndicator(
                            progress = { (value / 50f).coerceIn(0f, 1f) },
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(4.dp)
                                .clip(RoundedCornerShape(4.dp)),
                            color = tint,
                            trackColor = SpaceBlack
                        )
                    }
                }
            }
        }

        Spacer(modifier = Modifier.height(32.dp))
    }
}

// Data holder classes
data class Quadruple<A, B, C, D>(val first: A, val second: B, val third: C, val fourth: D)
data class SkillNode(val code: String, val name: String, val desc: String, val cost: Int, val attributeReq: String, val levelReq: Int)

// ======================================================================
// TAB CONTENT 2: CHALLENGES / MILESTONES SHOWCASE
// ======================================================================
@Composable
fun AchievementsTabContent(
    currentLevel: Int,
    currentXp: Int,
    strVal: Int,
    intVal: Int,
    vitVal: Int,
    senVal: Int,
    totalCompleted: Int,
    bestStreak: Int
) {
    val achievements = listOf(
        AchievementItem("First Awakening", "Achieve hunter evaluation status by completing your first daily activity task.", "totalCompleted >= 1", "badge_str", totalCompleted >= 1, totalCompleted, 1),
        AchievementItem("Elite Soldier", "Acquire battle status by completing a total of 10 system quests.", "totalCompleted >= 10", "badge_str", totalCompleted >= 10, totalCompleted, 10),
        AchievementItem("Monarch Breakthrough", "Break constraints and ascend up to level 6 Shadow Monarch.", "level >= 6", "badge_level", currentLevel >= 6, currentLevel, 6),
        AchievementItem("National Level Hero", "Ascend to the pinnacle of hunter society: Level 7.", "level >= 7", "badge_level", currentLevel >= 7, currentLevel, 7),
        AchievementItem("Struggle Streak Monarch", "Maintain a perfect streak of daily hunt compliance for 3 consecutive days.", "streak >= 3", "badge_streak", bestStreak >= 3, bestStreak, 3),
        AchievementItem("Veteran Hunter", "Complete a total of 50 system quests.", "totalCompleted >= 50", "badge_str", totalCompleted >= 50, totalCompleted, 50),
        AchievementItem("Unrivaled Power", "Raise your Strength attribute metric up to a target value of 20 points.", "str >= 20", "badge_str", strVal >= 20, strVal, 20),
        AchievementItem("Abyssal Wisdom", "Raise your Intellect attribute metric up to a target value of 20 points.", "int >= 20", "badge_int", intVal >= 20, intVal, 20)
    )

    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState()),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        Text(
            text = "🏆 ACTIVE SYSTEM MILESTONES",
            color = ElectricCyan,
            fontSize = 11.sp,
            fontWeight = FontWeight.Bold,
            fontFamily = FontFamily.Monospace
        )
        Text(
            text = "Collect unlock accomplishments to boost your status in the Double Dungeon system reports.",
            color = TextMuted,
            fontSize = 11.sp,
            lineHeight = 14.sp
        )

        Spacer(modifier = Modifier.height(4.dp))

        achievements.forEach { achievement ->
            Card(
                colors = CardDefaults.cardColors(
                    containerColor = if (achievement.isCompleted) DarkNavy else DarkNavy.copy(alpha = 0.5f)
                ),
                border = borderStrokeDefault(),
                shape = RoundedCornerShape(12.dp)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(12.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    // Badge Shield
                    Box(
                        modifier = Modifier
                            .size(44.dp)
                            .clip(RoundedCornerShape(8.dp))
                            .background(
                                if (achievement.isCompleted) {
                                    Brush.verticalGradient(listOf(ShadowPurple.copy(alpha = 0.3f), ElectricCyan.copy(alpha = 0.3f)))
                                } else {
                                    Brush.verticalGradient(listOf(SpaceBlack, SpaceBlack))
                                }
                            )
                            .border(
                                1.dp,
                                if (achievement.isCompleted) ElectricCyan else ShadowGrey,
                                RoundedCornerShape(8.dp)
                            ),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = if (achievement.isCompleted) Icons.Default.Stars else Icons.Default.Lock,
                            contentDescription = null,
                            tint = if (achievement.isCompleted) HunterYellow else TextMuted.copy(alpha = 0.5f),
                            modifier = Modifier.size(24.dp)
                        )
                    }

                    Spacer(modifier = Modifier.width(16.dp))

                    Column(modifier = Modifier.weight(1f)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(
                                text = achievement.title,
                                color = if (achievement.isCompleted) TextWhite else TextWhite.copy(alpha = 0.5f),
                                fontSize = 12.sp,
                                fontWeight = FontWeight.Bold
                            )

                            if (achievement.isCompleted) {
                                Text(
                                    text = "UNLOCKED",
                                    color = HunterGreen,
                                    fontSize = 8.sp,
                                    fontFamily = FontFamily.Monospace,
                                    fontWeight = FontWeight.Bold
                                )
                            }
                        }

                        Text(
                            text = achievement.desc,
                            color = TextMuted,
                            fontSize = 10.sp,
                            lineHeight = 12.sp
                        )

                        Spacer(modifier = Modifier.height(6.dp))

                        // Progress Gauge bar
                        val fraction = (achievement.progCurrent.toFloat() / achievement.progTarget.toFloat()).coerceIn(0f, 1f)
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            LinearProgressIndicator(
                                progress = { fraction },
                                modifier = Modifier
                                    .weight(1f)
                                    .height(4.dp)
                                    .clip(RoundedCornerShape(2.dp)),
                                color = if (achievement.isCompleted) ElectricCyan else ShadowPurple.copy(alpha = 0.5f),
                                trackColor = SpaceBlack
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Text(
                                text = "${achievement.progCurrent}/${achievement.progTarget}",
                                color = if (achievement.isCompleted) ElectricCyan else TextMuted,
                                fontSize = 8.sp,
                                fontFamily = FontFamily.Monospace
                            )
                        }
                    }
                }
            }
        }
        Spacer(modifier = Modifier.height(32.dp))
    }
}

data class AchievementItem(
    val title: String,
    val desc: String,
    val criteria: String,
    val iconKey: String,
    val isCompleted: Boolean,
    val progCurrent: Int,
    val progTarget: Int
)

// ======================================================================
// TAB CONTENT 3: INTELLIGENCE CENTER (ANALYTICS & CHARTS)
// ======================================================================
@Composable
fun AnalyticsTabContent(
    viewModel: SoloLevelingViewModel,
    totalCompleted: Int,
    totalMissed: Int,
    bestStreak: Int,
    strVal: Int,
    intVal: Int,
    vitVal: Int,
    senVal: Int,
    totalXp: Int
) {
    val logs by viewModel.questHistory.collectAsState()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState()),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Card(
                modifier = Modifier.weight(1f),
                colors = CardDefaults.cardColors(containerColor = DarkNavy),
                border = borderStrokeDefault()
            ) {
                Column(modifier = Modifier.padding(12.dp), horizontalAlignment = Alignment.CenterHorizontally) {
                    Text("TOTAL XP", color = TextMuted, fontSize = 9.sp, fontFamily = FontFamily.Monospace)
                    Text("$totalXp", color = ElectricCyan, fontSize = 16.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                }
            }
            Card(
                modifier = Modifier.weight(1f),
                colors = CardDefaults.cardColors(containerColor = DarkNavy),
                border = borderStrokeDefault()
            ) {
                Column(modifier = Modifier.padding(12.dp), horizontalAlignment = Alignment.CenterHorizontally) {
                    val totalCount = totalCompleted + totalMissed
                    val successPercent = if (totalCount == 0) 0f else (totalCompleted.toFloat() / totalCount.toFloat())
                    Text("SUCCESS RATE", color = TextMuted, fontSize = 9.sp, fontFamily = FontFamily.Monospace)
                    Text(String.format("%.0f%%", successPercent * 100), color = HunterGreen, fontSize = 16.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                }
            }
        }

        Text(
            text = "📊 BATTLE INTELLIGENCE REPORTS",
            color = ElectricCyan,
            fontSize = 11.sp,
            fontWeight = FontWeight.Bold,
            fontFamily = FontFamily.Monospace
        )

        // --- SUB SECTION: COMPLIANCE RATIO DONUT GAUGE ---
        Card(
            colors = CardDefaults.cardColors(containerColor = DarkNavy),
            border = borderStrokeDefault(),
            shape = RoundedCornerShape(16.dp)
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = "BATTLE ENGAGEMENT RATIO",
                    color = TextWhite,
                    fontSize = 11.sp,
                    fontFamily = FontFamily.Monospace,
                    fontWeight = FontWeight.Bold,
                    modifier = Modifier.align(Alignment.Start)
                )
                Spacer(modifier = Modifier.height(16.dp))

                val totalCount = totalCompleted + totalMissed
                val successPercent = if (totalCount == 0) 0f else (totalCompleted.toFloat() / totalCount.toFloat())

                Box(
                    contentAlignment = Alignment.Center,
                    modifier = Modifier.size(100.dp)
                ) {
                    Canvas(modifier = Modifier.fillMaxSize()) {
                        drawCircle(
                            color = ShadowGrey,
                            radius = size.minDimension / 2,
                            style = Stroke(width = 8.dp.toPx())
                        )
                        drawArc(
                            color = ElectricCyan,
                            startAngle = -90f,
                            sweepAngle = successPercent * 360f,
                            useCenter = false,
                            style = Stroke(width = 8.dp.toPx())
                        )
                    }
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text(
                            text = String.format("%.0f%%", successPercent * 100),
                            color = ElectricCyan,
                            fontSize = 18.sp,
                            fontWeight = FontWeight.ExtraBold,
                            fontFamily = FontFamily.Monospace
                        )
                        Text(
                            text = "COMPLIANCE",
                            color = TextMuted,
                            fontSize = 8.sp,
                            fontFamily = FontFamily.Monospace
                        )
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceAround
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text("COMPLETED", color = TextMuted, fontSize = 9.sp, fontFamily = FontFamily.Monospace)
                        Text("$totalCompleted ITEMS", color = HunterGreen, fontSize = 13.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                    }

                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text("MISSED", color = TextMuted, fontSize = 9.sp, fontFamily = FontFamily.Monospace)
                        Text("$totalMissed ITEMS", color = HunterRed, fontSize = 13.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                    }

                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text("TOTAL STREAK", color = TextMuted, fontSize = 9.sp, fontFamily = FontFamily.Monospace)
                        Text("$bestStreak DAYS", color = HunterYellow, fontSize = 13.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                    }
                }
            }
        }

        // --- SUB SECTION: WEEKLY ACTIVITY LOG GAUGE CHARTS ---
        Card(
            colors = CardDefaults.cardColors(containerColor = DarkNavy),
            border = borderStrokeDefault(),
            shape = RoundedCornerShape(16.dp)
        ) {
            Column(modifier = Modifier.padding(16.dp)) {
                Text(
                    text = "📈 WEEKLY INTEL PRODUCTIVITY LOGS",
                    color = TextWhite,
                    fontSize = 11.sp,
                    fontFamily = FontFamily.Monospace,
                    fontWeight = FontWeight.Bold
                )
                Spacer(modifier = Modifier.height(12.dp))

                // Group stats completed by last 7 calendar days
                val calendar = Calendar.getInstance()
                val format = java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.getDefault())
                val dayFormat = java.text.SimpleDateFormat("E", java.util.Locale.getDefault())

                val last7Days = remember {
                    (0..6).map { offset ->
                        val cal = Calendar.getInstance().apply { add(Calendar.DAY_OF_YEAR, -offset) }
                        cal.time
                    }.reversed()
                }

                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(80.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.Bottom
                ) {
                    for (date in last7Days) {
                        val formattedDate = format.format(date)
                        // count completions in history database or logs
                        val dailyLogsCompletions = logs.count {
                            val logDayString = format.format(java.util.Date(it.completedAt))
                            logDayString == formattedDate
                        }
                        val barHeightFactor = (dailyLogsCompletions / 4f).coerceIn(0.1f, 1f)

                        Column(
                            horizontalAlignment = Alignment.CenterHorizontally,
                            modifier = Modifier.weight(1f)
                        ) {
                            Text(
                                text = if (dailyLogsCompletions > 0) "+$dailyLogsCompletions" else "0",
                                color = if (dailyLogsCompletions > 0) ElectricCyan else TextMuted,
                                fontSize = 8.sp,
                                fontFamily = FontFamily.Monospace
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Box(
                                modifier = Modifier
                                    .width(8.dp)
                                    .fillMaxHeight(barHeightFactor)
                                    .clip(RoundedCornerShape(topStart = 4.dp, topEnd = 4.dp))
                                    .background(
                                        if (dailyLogsCompletions > 0) {
                                            Brush.verticalGradient(listOf(ElectricCyan, ShadowPurple))
                                        } else {
                                            Brush.verticalGradient(listOf(ShadowGrey, ShadowGrey))
                                        }
                                    )
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = dayFormat.format(date).uppercase(),
                                color = TextMuted,
                                fontSize = 8.sp,
                                fontFamily = FontFamily.Monospace
                            )
                        }
                    }
                }
            }
        }

        // --- SUB SECTION: CHARACTER CATEGORIES ENGAGEMENT ---
        Card(colors = CardDefaults.cardColors(containerColor = DarkNavy), border = borderStrokeDefault()) {
            Column(modifier = Modifier.padding(16.dp)) {
                Text(
                    text = "🎯 FOCUS CATEGORY BALANCES",
                    color = TextWhite,
                    fontSize = 11.sp,
                    fontFamily = FontFamily.Monospace,
                    fontWeight = FontWeight.Bold
                )
                Spacer(modifier = Modifier.height(8.dp))
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                    AttributesBadgeLabel("SWORDSMAN", strVal, HunterRed, "STR")
                    AttributesBadgeLabel("MAGE", intVal, ElectricCyan, "INT")
                    AttributesBadgeLabel("DEFENDER", vitVal, HunterGreen, "VIT")
                    AttributesBadgeLabel("ASSASSIN", senVal, HunterYellow, "SEN")
                }
            }
        }

        Spacer(modifier = Modifier.height(32.dp))
    }
}

@Composable
fun AttributesBadgeLabel(label: String, pts: Int, color: Color, prefix: String) {
    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(8.dp))
            .background(SpaceBlack)
            .border(1.dp, ShadowGrey, RoundedCornerShape(8.dp))
            .padding(6.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(text = prefix, color = color, fontSize = 9.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
            Text(text = "$pts PTS", color = TextWhite, fontSize = 11.sp, fontWeight = FontWeight.ExtraBold, fontFamily = FontFamily.Monospace)
            Text(text = label, color = TextMuted, fontSize = 7.sp)
        }
    }
}

// ======================================================================
// TAB CONTENT 4: SYSTEM DECK (SETTINGS & EXPORT CONTROLS)
// ======================================================================
@Composable
fun SettingsTabContent(
    viewModel: SoloLevelingViewModel,
    soundEnabled: Boolean,
    notifEnabled: Boolean,
    antiLeakEnabled: Boolean,
    currentLang: String,
    currentTheme: String,
    alarmSoundUri: String,
    levelUpSoundUri: String,
    onTriggerBackup: () -> Unit,
    onTriggerCsvExport: () -> Unit
) {
    var showResetConfirm by remember { mutableStateOf(false) }
    var showImportDialog by remember { mutableStateOf(false) }
    var importJsonText by remember { mutableStateOf("") }
    val context = androidx.compose.ui.platform.LocalContext.current

    val questAudioFileLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.GetContent(),
        onResult = { uri ->
            if (uri != null) {
                viewModel.updateSettings(
                    soundEnabled, notifEnabled, currentLang, currentTheme,
                    alarmSoundUri = uri.toString(),
                    levelUpSoundUri = levelUpSoundUri,
                    antiLeakEnabled = antiLeakEnabled
                )
            }
        }
    )

    val levelUpAudioFileLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.GetContent(),
        onResult = { uri ->
            if (uri != null) {
                viewModel.updateSettings(
                    soundEnabled, notifEnabled, currentLang, currentTheme,
                    alarmSoundUri = alarmSoundUri,
                    levelUpSoundUri = uri.toString(),
                    antiLeakEnabled = antiLeakEnabled
                )
            }
        }
    )

    val alarmSoundLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.StartActivityForResult(),
        onResult = { result ->
            try {
                if (result.resultCode == Activity.RESULT_OK) {
                    val uri = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                        result.data?.getParcelableExtra(RingtoneManager.EXTRA_RINGTONE_PICKED_URI, Uri::class.java)
                    } else {
                        @Suppress("DEPRECATION")
                        result.data?.getParcelableExtra(RingtoneManager.EXTRA_RINGTONE_PICKED_URI)
                    }
                    if (uri != null) {
                        viewModel.updateSettings(
                            soundEnabled, notifEnabled, currentLang, currentTheme,
                            alarmSoundUri = uri.toString(),
                            levelUpSoundUri = levelUpSoundUri,
                            antiLeakEnabled = antiLeakEnabled
                        )
                    }
                }
            } catch (e: Exception) {
                Toast.makeText(context, "Error selecting sound", Toast.LENGTH_SHORT).show()
            }
        }
    )

    val levelUpSoundLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.StartActivityForResult(),
        onResult = { result ->
            try {
                if (result.resultCode == Activity.RESULT_OK) {
                    val uri = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                        result.data?.getParcelableExtra(RingtoneManager.EXTRA_RINGTONE_PICKED_URI, Uri::class.java)
                    } else {
                        @Suppress("DEPRECATION")
                        result.data?.getParcelableExtra(RingtoneManager.EXTRA_RINGTONE_PICKED_URI)
                    }
                    if (uri != null) {
                        viewModel.updateSettings(
                            soundEnabled, notifEnabled, currentLang, currentTheme,
                            alarmSoundUri = alarmSoundUri,
                            levelUpSoundUri = uri.toString(),
                            antiLeakEnabled = antiLeakEnabled
                        )
                    }
                }
            } catch (e: Exception) {
                Toast.makeText(context, "Error selecting sound", Toast.LENGTH_SHORT).show()
            }
        }
    )

    if (showImportDialog) {
        AlertDialog(
            onDismissRequest = {
                showImportDialog = false
                importJsonText = ""
            },
            title = {
                Text(
                    text = "📥 RESTORE SYSTEM DATA",
                    color = ElectricCyan,
                    fontFamily = FontFamily.Monospace,
                    fontSize = 13.sp,
                    fontWeight = FontWeight.Bold
                )
            },
            text = {
                Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    Text(
                        text = "Paste the complete JSON backup string representing your previously saved character data. This replaces or updates core stats.",
                        color = TextMuted,
                        fontSize = 11.sp
                    )

                    OutlinedTextField(
                        value = importJsonText,
                        onValueChange = { importJsonText = it },
                        placeholder = { Text("Paste JSON backup code here...", color = TextMuted, fontSize = 10.sp, fontFamily = FontFamily.Monospace) },
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(140.dp),
                        colors = OutlinedTextFieldDefaults.colors(
                            focusedTextColor = TextWhite,
                            unfocusedTextColor = TextWhite,
                            focusedBorderColor = ElectricCyan,
                            unfocusedBorderColor = ShadowGrey
                        ),
                        textStyle = androidx.compose.ui.text.TextStyle(fontSize = 10.sp, fontFamily = FontFamily.Monospace)
                    )
                }
            },
            containerColor = DarkNavy,
            shape = RoundedCornerShape(16.dp),
            confirmButton = {
                Button(
                    onClick = {
                        if (importJsonText.isNotBlank()) {
                            val success = viewModel.importDataFromJson(importJsonText.trim())
                            if (success) {
                                android.widget.Toast.makeText(context, "System Reconstitution Successful!", android.widget.Toast.LENGTH_LONG).show()
                            } else {
                                android.widget.Toast.makeText(context, "Failed: Invalid Backup Data Schema", android.widget.Toast.LENGTH_LONG).show()
                            }
                            showImportDialog = false
                            importJsonText = ""
                        }
                    },
                    colors = ButtonDefaults.buttonColors(containerColor = ShadowPurple),
                    enabled = importJsonText.isNotBlank()
                ) {
                    Text("EXECUTE RESTORE", color = TextWhite, fontFamily = FontFamily.Monospace, fontSize = 11.sp)
                }
            },
            dismissButton = {
                TextButton(onClick = {
                    showImportDialog = false
                    importJsonText = ""
                }) {
                    Text("ABORT", color = TextMuted, fontFamily = FontFamily.Monospace, fontSize = 11.sp)
                }
            }
        )
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState()),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        Text(
            text = "⚙️ OPERATIONS SYSTEM DECK",
            color = ElectricCyan,
            fontSize = 11.sp,
            fontWeight = FontWeight.Bold,
            fontFamily = FontFamily.Monospace
        )

        // --- SUB SECTION: CORE PREFERENCES SWITCHS ---
        Card(
            colors = CardDefaults.cardColors(containerColor = DarkNavy),
            border = borderStrokeDefault(),
            shape = RoundedCornerShape(16.dp)
        ) {
            Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                Text(
                    text = "HUNTER PREFERENCES",
                    color = TextWhite,
                    fontSize = 11.sp,
                    fontFamily = FontFamily.Monospace,
                    fontWeight = FontWeight.Bold
                )

                // Sound Effect Switch
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column {
                        Text("SYSTEM SOUND EFFECTS", color = TextWhite, fontSize = 12.sp, fontWeight = FontWeight.Bold)
                        Text("Play high-frequency quest alarms & leveling sounds", color = TextMuted, fontSize = 9.sp)
                    }
                    Switch(
                        checked = soundEnabled,
                        onCheckedChange = { viewModel.updateSettings(it, notifEnabled, "English", "Midnight Onyx", alarmSoundUri, levelUpSoundUri, antiLeakEnabled) },
                        colors = SwitchDefaults.colors(
                            checkedThumbColor = TextWhite,
                            checkedTrackColor = ShadowPurple
                        )
                    )
                }

                // Push notifications Switch
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column {
                        Text("SMART REMINDERS", color = TextWhite, fontSize = 12.sp, fontWeight = FontWeight.Bold)
                        Text("Persistent background alarm notifications for active daily quests", color = TextMuted, fontSize = 9.sp)
                    }
                    Switch(
                        checked = notifEnabled,
                        onCheckedChange = { viewModel.updateSettings(soundEnabled, it, "English", "Midnight Onyx", alarmSoundUri, levelUpSoundUri, antiLeakEnabled) },
                        colors = SwitchDefaults.colors(
                            checkedThumbColor = TextWhite,
                            checkedTrackColor = ShadowPurple
                        )
                    )
                }

                // Anti-Leak Protocol switch
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column {
                        Text("ANTI-LEAK PROTOCOL", color = TextWhite, fontSize = 12.sp, fontWeight = FontWeight.Bold)
                        Text("Prevents screenshots and screen recordings of the app", color = TextMuted, fontSize = 9.sp)
                    }
                    Switch(
                        checked = antiLeakEnabled,
                        onCheckedChange = { viewModel.updateSettings(soundEnabled, notifEnabled, "English", "Midnight Onyx", alarmSoundUri, levelUpSoundUri, it) },
                        colors = SwitchDefaults.colors(
                            checkedThumbColor = TextWhite,
                            checkedTrackColor = ShadowPurple
                        )
                    )
                }

                // Custom Quest Sound Picker
                Column {
                    Text("QUEST COMPLETION SOUND", color = TextWhite, fontSize = 12.sp, fontWeight = FontWeight.Bold)
                    Text("Current: ${if (alarmSoundUri.isEmpty()) "System Default (Beep)" else "Custom Selected"}", color = TextMuted, fontSize = 9.sp)
                    Spacer(modifier = Modifier.height(4.dp))
                    Button(
                        onClick = {
                            try {
                                val intent = Intent(RingtoneManager.ACTION_RINGTONE_PICKER).apply {
                                    putExtra(RingtoneManager.EXTRA_RINGTONE_TYPE, RingtoneManager.TYPE_NOTIFICATION)
                                    putExtra(RingtoneManager.EXTRA_RINGTONE_TITLE, "Select Quest Sound")
                                    if (alarmSoundUri.isNotEmpty()) {
                                        try {
                                            putExtra(RingtoneManager.EXTRA_RINGTONE_EXISTING_URI, Uri.parse(alarmSoundUri))
                                        } catch (e: Exception) {}
                                    }
                                }
                                alarmSoundLauncher.launch(intent)
                            } catch (e: Exception) {
                                try {
                                    questAudioFileLauncher.launch("audio/*")
                                } catch (ex: Exception) {
                                    Toast.makeText(context, "No app found to pick audio", Toast.LENGTH_SHORT).show()
                                }
                            }
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = DarkNavy),
                        modifier = Modifier.fillMaxWidth().border(1.dp, ShadowGrey, RoundedCornerShape(8.dp)),
                        shape = RoundedCornerShape(8.dp)
                    ) {
                        Text("CHANGE QUEST SOUND", fontSize = 10.sp, color = ElectricCyan, fontFamily = FontFamily.Monospace)
                    }
                }

                // Custom Level Up Sound Picker
                Column {
                    Text("LEVEL UP FANFARE SOUND", color = TextWhite, fontSize = 12.sp, fontWeight = FontWeight.Bold)
                    Text("Current: ${if (levelUpSoundUri.isEmpty()) "System Default (Chime)" else "Custom Selected"}", color = TextMuted, fontSize = 9.sp)
                    Spacer(modifier = Modifier.height(4.dp))
                    Button(
                        onClick = {
                            try {
                                val intent = Intent(RingtoneManager.ACTION_RINGTONE_PICKER).apply {
                                    putExtra(RingtoneManager.EXTRA_RINGTONE_TYPE, RingtoneManager.TYPE_NOTIFICATION)
                                    putExtra(RingtoneManager.EXTRA_RINGTONE_TITLE, "Select Level Up Sound")
                                    if (levelUpSoundUri.isNotEmpty()) {
                                        try {
                                            putExtra(RingtoneManager.EXTRA_RINGTONE_EXISTING_URI, Uri.parse(levelUpSoundUri))
                                        } catch (e: Exception) {}
                                    }
                                }
                                levelUpSoundLauncher.launch(intent)
                            } catch (e: Exception) {
                                try {
                                    levelUpAudioFileLauncher.launch("audio/*")
                                } catch (ex: Exception) {
                                    Toast.makeText(context, "No app found to pick audio", Toast.LENGTH_SHORT).show()
                                }
                            }
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = DarkNavy),
                        modifier = Modifier.fillMaxWidth().border(1.dp, ShadowGrey, RoundedCornerShape(8.dp)),
                        shape = RoundedCornerShape(8.dp)
                    ) {
                        Text("CHANGE LEVEL UP SOUND", fontSize = 10.sp, color = ElectricCyan, fontFamily = FontFamily.Monospace)
                    }
                }
            }
        }

        // --- SUB SECTION: SECURE DATA EXPORTS & BACKUPS ---
        Card(
            colors = CardDefaults.cardColors(containerColor = DarkNavy),
            border = borderStrokeDefault()
        ) {
            Column(modifier = Modifier.padding(16.dp)) {
                Text(
                    text = "📤 OFFLINE DATA COMPRESSION & EXPORT",
                    color = TextWhite,
                    fontSize = 11.sp,
                    fontFamily = FontFamily.Monospace,
                    fontWeight = FontWeight.Bold
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = "Pack up your stats, quest records, and system progress to secure parameters or analyze weekly trends.",
                    color = TextMuted,
                    fontSize = 11.sp
                )

                Spacer(modifier = Modifier.height(12.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    Button(
                        onClick = onTriggerBackup,
                        colors = ButtonDefaults.buttonColors(containerColor = ShadowPurple),
                        shape = RoundedCornerShape(8.dp),
                        modifier = Modifier.weight(1f)
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(Icons.Default.DataObject, contentDescription = null, modifier = Modifier.size(14.dp))
                            Spacer(modifier = Modifier.width(6.dp))
                            Text("EXPORT JSON", fontSize = 11.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                        }
                    }

                    Button(
                        onClick = onTriggerCsvExport,
                        colors = ButtonDefaults.buttonColors(containerColor = ShadowPurple),
                        shape = RoundedCornerShape(8.dp),
                        modifier = Modifier.weight(1f)
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(Icons.Default.TableChart, contentDescription = null, modifier = Modifier.size(14.dp))
                            Spacer(modifier = Modifier.width(6.dp))
                            Text("LOGS TO CSV", fontSize = 11.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                        }
                    }
                }

                Spacer(modifier = Modifier.height(10.dp))

                Button(
                    onClick = { showImportDialog = true },
                    colors = ButtonDefaults.buttonColors(containerColor = ElectricCyan),
                    shape = RoundedCornerShape(8.dp),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.Center
                    ) {
                        Icon(Icons.Default.Cached, contentDescription = null, modifier = Modifier.size(14.dp), tint = SpaceBlack)
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = "IMPORT SYSTEM BACKUP (.JSON)",
                            color = SpaceBlack,
                            fontSize = 11.sp,
                            fontWeight = FontWeight.ExtraBold,
                            fontFamily = FontFamily.Monospace
                        )
                    }
                }
            }
        }

        // --- SUB SECTION: PERSISTENT SYSTEM DESTRUCT PANEL ---
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(16.dp))
                .background(DarkNavy.copy(alpha = 0.6f))
                .border(1.dp, ShadowGrey, RoundedCornerShape(16.dp))
                .padding(16.dp)
        ) {
            Column {
                Text(
                    text = "💥 ULTRA SYSTEM HARD PURGE",
                    color = TextWhite,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Bold,
                    fontFamily = FontFamily.Monospace
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = "Wipes your character level accomplishments, streaking milestones, customized preferences and resets everything back to Level 1 E-Rank.",
                    color = TextMuted,
                    fontSize = 11.sp
                )

                Spacer(modifier = Modifier.height(12.dp))

                Button(
                    onClick = { showResetConfirm = true },
                    colors = ButtonDefaults.buttonColors(containerColor = HunterRed.copy(alpha = 0.2f)),
                    shape = RoundedCornerShape(8.dp),
                    modifier = Modifier
                        .fillMaxWidth()
                        .border(1.dp, HunterRed, RoundedCornerShape(8.dp))
                ) {
                    Text(
                        text = "PURGE CHARACTER MATRIX",
                        color = HunterRed,
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                }
            }
        }

        if (showResetConfirm) {
            AlertDialog(
                onDismissRequest = { showResetConfirm = false },
                title = { Text("⚠️ HARD RESET SEQUENCE CONFIRMATION", color = HunterRed, fontFamily = FontFamily.Monospace, fontSize = 14.sp) },
                text = { Text("Triggering a complete wipe is irreversible and reinstates E-Rank status. Confirm purge?", color = TextWhite) },
                containerColor = DarkNavy,
                shape = RoundedCornerShape(16.dp),
                confirmButton = {
                    Button(
                        onClick = {
                            viewModel.forceResetData()
                            showResetConfirm = false
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = HunterRed)
                    ) {
                        Text("FORCE PURGATION", color = TextWhite, fontFamily = FontFamily.Monospace)
                    }
                },
                dismissButton = {
                    TextButton(onClick = { showResetConfirm = false }) {
                        Text("ABORT", color = TextMuted, fontFamily = FontFamily.Monospace)
                    }
                }
            )
        }

        Spacer(modifier = Modifier.height(48.dp))
    }
}

// Helpers
@Composable
fun borderStrokeDefault() = androidx.compose.foundation.BorderStroke(1.dp, ShadowGrey)
