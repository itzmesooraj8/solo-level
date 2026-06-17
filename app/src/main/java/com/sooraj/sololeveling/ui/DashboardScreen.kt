package com.sooraj.sololeveling.ui

import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.foundation.verticalScroll
import androidx.compose.foundation.rememberScrollState
import androidx.compose.animation.*
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CutCornerShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.rotate
import com.sooraj.sololeveling.data.QuestEngine
import com.sooraj.sololeveling.data.StatsEntity
import com.sooraj.sololeveling.data.TaskEntity
import com.sooraj.sololeveling.data.HabitEntity
import com.sooraj.sololeveling.data.QuestHistoryEntity
import com.sooraj.sololeveling.ui.theme.*
import java.util.Calendar
import java.util.Date
import java.text.SimpleDateFormat
import java.util.Locale

@OptIn(ExperimentalAnimationApi::class, ExperimentalMaterial3Api::class)
@Composable
fun DashboardScreen(
    viewModel: SoloLevelingViewModel,
    onRequestNotificationPermission: () -> Unit = {},
    onNavigateToTasks: () -> Unit
) {
    val stats by viewModel.statsState.collectAsState()
    val activeTasks by viewModel.activeTasks.collectAsState()
    val activePromptTask by viewModel.activePromptTask.collectAsState()
    val levelUpLevel by viewModel.showLevelUpScreen.collectAsState()

    var showAddTaskDialog by remember { mutableStateOf(false) }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(SpaceBlack)
            .elegantDarkGlow()
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .verticalScroll(rememberScrollState())
                .padding(16.dp)
        ) {
            // Header / Greeting
            Spacer(modifier = Modifier.height(24.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = "PLAYER NAME:",
                        color = TextMuted,
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                    Text(
                        text = stats?.username ?: "HUNTER_SOORAJ",
                        color = ElectricCyan,
                        fontSize = 22.sp,
                        fontWeight = FontWeight.ExtraBold,
                        fontFamily = FontFamily.SansSerif
                    )
                }

                // Active Streak Badge
                val currentStreak = stats?.currentStreak ?: 0
                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(12.dp))
                        .background(
                            Brush.horizontalGradient(
                                listOf(ShadowPurple.copy(alpha = 0.15f), ElectricCyan.copy(alpha = 0.15f))
                            )
                        )
                        .border(1.dp, ElectricCyan.copy(alpha = 0.5f), RoundedCornerShape(12.dp))
                        .padding(horizontal = 12.dp, vertical = 6.dp)
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(
                            imageVector = Icons.Default.LocalFireDepartment,
                            contentDescription = "Streak",
                            tint = HunterYellow,
                            modifier = Modifier.size(18.dp)
                        )
                        Spacer(modifier = Modifier.width(4.dp))
                        Text(
                            text = "$currentStreak DAY STREAK",
                            color = TextWhite,
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.Monospace
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // HUNTER RANK LICENSE COMPONENT (Dynamic badge, title, and avatar)
            stats?.let { statsData ->
                HunterRankCard(stats = statsData, onNavigateToProfile = {})
                Spacer(modifier = Modifier.height(16.dp))
            }

            // SYSTEM SEARCH CONTAINER (Allows searching active tasks, habits, histories)
            val searchQuery by viewModel.searchQuery.collectAsState()
            OutlinedTextField(
                value = searchQuery,
                onValueChange = { viewModel.setSearchQuery(it) },
                placeholder = { Text("Search quests, habits, log history...", color = TextMuted, fontSize = 11.sp, fontFamily = FontFamily.Monospace) },
                leadingIcon = { Icon(Icons.Default.Search, contentDescription = "Search", tint = ElectricCyan, modifier = Modifier.size(16.dp)) },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 4.dp)
                    .height(52.dp),
                shape = RoundedCornerShape(12.dp),
                colors = OutlinedTextFieldDefaults.colors(
                    focusedTextColor = TextWhite,
                    unfocusedTextColor = TextWhite,
                    focusedContainerColor = DarkNavy,
                    unfocusedContainerColor = DarkNavy,
                    focusedBorderColor = ElectricCyan,
                    unfocusedBorderColor = ShadowGrey
                ),
                singleLine = true
            )

            Spacer(modifier = Modifier.height(12.dp))

            // Level Stats Card
            stats?.let { statsData ->
                LevelProgressCard(statsData = statsData)
                Spacer(modifier = Modifier.height(16.dp))
                
                // Track visual weekly growth
                val history by viewModel.historyState.collectAsState()
                XpGrowthChart(history = history, currentXp = statsData.xp)
            }

            Spacer(modifier = Modifier.height(20.dp))

            // Today's Quest Header
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = "⚔️ TODAY'S QUEST LOG",
                        color = TextWhite,
                        fontSize = 16.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                    Spacer(modifier = Modifier.height(6.dp))
                    QuestResetTimer()
                }
            }

            Spacer(modifier = Modifier.height(8.dp))

            Spacer(modifier = Modifier.height(8.dp))

            // Active Tasks List Today
            val filteredActiveTasks = remember(activeTasks, searchQuery) {
                if (searchQuery.isBlank()) activeTasks else {
                    activeTasks.filter { it.title.contains(searchQuery, ignoreCase = true) }
                }
            }

            if (filteredActiveTasks.isEmpty()) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 24.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Icon(
                            imageVector = Icons.Default.PlaylistAddCheck,
                            contentDescription = "Empty",
                            tint = TextMuted,
                            modifier = Modifier.size(64.dp)
                        )
                        Spacer(modifier = Modifier.height(12.dp))
                        Text(
                            text = "NO QUESTS MATCHED TODAY",
                            color = TextMuted,
                            fontSize = 13.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.Monospace
                        )
                        Spacer(modifier = Modifier.height(6.dp))
                        Text(
                            text = "Adjust search parameters or plan weekly quests.",
                            color = TextMuted,
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Light
                        )
                    }
                }
            } else {
                Column(
                    modifier = Modifier.fillMaxWidth(),
                    verticalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    filteredActiveTasks.forEach { task ->
                        TaskItemCard(
                            task = task,
                            dayStarted = true,
                            onComplete = { viewModel.completeQuest(task) },
                            onSkip = { viewModel.skipQuest(task) },
                            onTriggerSimPrompt = { viewModel.triggerSimulatedPrompt(task) },
                            onDelete = { viewModel.deleteTask(task) }
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(24.dp))

            // Daily Repeatable Habits Section
            val habits by viewModel.habits.collectAsState()
            val filteredHabits = remember(habits, searchQuery) {
                if (searchQuery.isBlank()) habits else {
                    habits.filter { it.title.contains(searchQuery, ignoreCase = true) }
                }
            }
            HabitListSection(
                habits = filteredHabits,
                onToggle = { viewModel.toggleHabitCompletion(it) },
                onAddHabit = { title, diff, cat -> viewModel.insertHabit(title, diff, cat) },
                onDelete = { viewModel.deleteHabit(it) }
            )

            Spacer(modifier = Modifier.height(20.dp))

            // System Quest History Log (Last 30 Days)
            val questHistory by viewModel.questHistory.collectAsState()
            val filteredHistory = remember(questHistory, searchQuery) {
                if (searchQuery.isBlank()) questHistory else {
                    questHistory.filter { it.title.contains(searchQuery, ignoreCase = true) }
                }
            }
            QuestHistorySection(
                historyLogs = filteredHistory,
                onClearAll = { viewModel.clearAllQuestHistory() },
                onDeleteLog = { viewModel.deleteQuestHistoryLog(it) }
            )

            Spacer(modifier = Modifier.height(84.dp))
        }

        // FLOATING ACTION BUTTON (Custom styled neon FAB)
        FloatingActionButton(
            onClick = { showAddTaskDialog = true },
            containerColor = Color.Transparent,
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(24.dp)
                .size(56.dp)
                .clip(RoundedCornerShape(28.dp))
                .background(Brush.linearGradient(listOf(ElectricCyan, ShadowPurple)))
                .border(1.dp, LuminousCyan, RoundedCornerShape(28.dp)),
            elevation = FloatingActionButtonDefaults.elevation(defaultElevation = 8.dp)
        ) {
            Icon(
                imageVector = Icons.Default.Add,
                contentDescription = "Add Custom Quest",
                tint = SpaceBlack,
                modifier = Modifier.size(28.dp)
            )
        }

        // ADD TASK DIALOG (In-Place styling)
        if (showAddTaskDialog) {
            AddTaskDialog(
                onDismiss = { showAddTaskDialog = false },
                onConfirm = { title, time, duration, difficulty, mode, customPrompt, selectedDate ->
                    viewModel.insertTask(title, time, duration, difficulty, mode, customPrompt, null, selectedDate)
                    showAddTaskDialog = false
                }
            )
        }

        // REAL-TIME EVALUATION POP-UP (Blur / dim background dialog)
        activePromptTask?.let { task ->
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(Color.Black.copy(alpha = 0.85f))
                    .clickable(enabled = false) {}, // Intercept clicks
                contentAlignment = Alignment.Center
            ) {
                EvaluationPopup(
                    task = task,
                    onChooseCompleted = { viewModel.handleSimulatedChoice(true) },
                    onChooseSkipped = { viewModel.handleSimulatedChoice(false) },
                    onDismiss = { viewModel.dismissPrompt() }
                )
            }
        }

        // LEVEL UP CELEBRATION overlay
        levelUpLevel?.let { newLevel ->
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(Color.Black.copy(alpha = 0.9f))
                    .clickable(enabled = false) {},
                contentAlignment = Alignment.Center
            ) {
                LevelUpCelebration(
                    level = newLevel,
                    onAccept = { viewModel.dismissLevelUp() }
                )
            }
        }

        // SYSTEM ONBOARDING CHECKPOINT AWAKENING FLOW
        stats?.let { statsData ->
            if (!statsData.onboardingCompleted) {
                OnboardingOverlay(
                    viewModel = viewModel,
                    onRequestNotificationPermission = onRequestNotificationPermission
                )
            }
        }
    }
}

@Composable
fun OnboardingOverlay(
    viewModel: SoloLevelingViewModel,
    onRequestNotificationPermission: () -> Unit = {}
) {
    var currentStep by remember { mutableStateOf(1) }
    var codename by remember { mutableStateOf("") }
    var selectedClass by remember { mutableStateOf("Swordsman Fighter") }



    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(SpaceBlack.copy(alpha = 0.98f))
            .clickable(enabled = false) {} // Intercept clicks
            .verticalScroll(rememberScrollState())
            .padding(24.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp),
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(20.dp))
                .background(DarkNavy)
                .border(2.dp, ShadowPurple, RoundedCornerShape(20.dp))
                .padding(20.dp)
        ) {
            // STEP INDICATION BADGES
            Row(
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                listOf(1, 2).forEach { step ->
                    Box(
                        modifier = Modifier
                            .size(24.dp)
                            .clip(RoundedCornerShape(24.dp))
                            .background(if (currentStep == step) ElectricCyan else if (currentStep > step) ShadowPurple else ShadowGrey),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = step.toString(),
                            color = if (currentStep == step) SpaceBlack else TextMuted,
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.Monospace
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(4.dp))

            when (currentStep) {
                1 -> {
                    // STEP 1: GREETING & PROTOCOL INTRODUCTION
                    Icon(
                        imageVector = Icons.Default.BrightnessAuto,
                        contentDescription = null,
                        tint = ElectricCyan,
                        modifier = Modifier.size(56.dp)
                    )

                    Text(
                        text = "⚡ THE SYSTEM SELECTION PROTOCOL",
                        color = ElectricCyan,
                        fontSize = 14.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace,
                        letterSpacing = 1.sp
                    )

                    Text(
                        text = "WELCOME, AWAKENED CANDIDATE.\n\nThe magical gate has appeared. The System has recognized your innate potential and chosen you as a Player. As long as you follow the system's daily instructions and quests, you will grow indefinitely, breaking your limits.",
                        color = TextWhite,
                        fontSize = 12.sp,
                        textAlign = androidx.compose.ui.text.style.TextAlign.Center,
                        lineHeight = 18.sp,
                        fontFamily = FontFamily.SansSerif
                    )

                    Text(
                        text = "WARNING: Failures carry extreme penalties. If you are ready to undergo reawakening, click proceed.",
                        color = HunterRed,
                        fontSize = 10.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace,
                        textAlign = androidx.compose.ui.text.style.TextAlign.Center
                    )

                    Spacer(modifier = Modifier.height(10.dp))

                    Button(
                        onClick = { currentStep = 2 },
                        colors = ButtonDefaults.buttonColors(containerColor = ShadowPurple),
                        shape = RoundedCornerShape(8.dp),
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(44.dp)
                            .border(1.dp, ElectricCyan, RoundedCornerShape(8.dp))
                    ) {
                        Text(
                            text = "PROCEED TO REAWAKENING",
                            color = TextWhite,
                            fontSize = 11.sp,
                            fontWeight = FontWeight.ExtraBold,
                            fontFamily = FontFamily.Monospace
                        )
                    }
                }
                2 -> {
                    // STEP 2: PROFILE CREATION
                    Text(
                        text = "⚡ CHARACTER SPECIFICATIONS SETUP",
                        color = ElectricCyan,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace,
                        letterSpacing = 1.sp
                    )

                    // Name Input
                    Column(modifier = Modifier.fillMaxWidth()) {
                        Text(
                            text = "CODENAME DESIGNATION",
                            color = TextWhite,
                            fontSize = 10.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.Monospace
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        OutlinedTextField(
                            value = codename,
                            onValueChange = { codename = it },
                            placeholder = { Text("e.g. MONARCH_JINWOO", color = TextMuted, fontSize = 12.sp) },
                            singleLine = true,
                            modifier = Modifier.fillMaxWidth(),
                            colors = OutlinedTextFieldDefaults.colors(
                                focusedTextColor = TextWhite,
                                unfocusedTextColor = TextWhite,
                                focusedBorderColor = ElectricCyan,
                                unfocusedBorderColor = ShadowGrey
                            )
                        )
                    }

                    Spacer(modifier = Modifier.height(8.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        Button(
                            onClick = { currentStep = 1 },
                            colors = ButtonDefaults.buttonColors(containerColor = ShadowGrey),
                            shape = RoundedCornerShape(8.dp),
                            modifier = Modifier.weight(1f).height(44.dp)
                        ) {
                            Text("BACK", color = TextMuted, fontSize = 11.sp, fontFamily = FontFamily.Monospace)
                        }

                        val isEnabled = codename.isNotBlank()
                        Button(
                            onClick = {
                                if (isEnabled) {
                                    viewModel.completeOnboarding(codename.trim(), "Midnight Onyx", emptyList())
                                }
                            },
                            enabled = isEnabled,
                            colors = ButtonDefaults.buttonColors(containerColor = LuminousCyan),
                            shape = RoundedCornerShape(8.dp),
                            modifier = Modifier
                                .weight(1.5f)
                                .height(44.dp)
                                .border(1.dp, if (isEnabled) ElectricCyan else Color.Transparent, RoundedCornerShape(8.dp))
                        ) {
                            Text(
                                text = "EXECUTE REAWAKENING",
                                color = SpaceBlack,
                                fontSize = 10.sp,
                                fontWeight = FontWeight.ExtraBold,
                                fontFamily = FontFamily.Monospace
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun LevelProgressCard(statsData: StatsEntity) {
    val level = statsData.level
    val xp = statsData.xp
    val prevThreshold = QuestEngine.getXpPrevThreshold(level)
    val nextThreshold = QuestEngine.getXpThreshold(level)
    val xpInThisLevel = (xp - prevThreshold).coerceAtLeast(0)
    val xpNeededInThisLevel = nextThreshold - prevThreshold
    val fraction = if (xpNeededInThisLevel > 0) xpInThisLevel.toFloat() / xpNeededInThisLevel else 1f

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(DarkNavy.copy(alpha = 0.65f))
            .border(1.5.dp, Brush.horizontalGradient(listOf(ShadowPurple, ElectricCyan)), RoundedCornerShape(16.dp))
            .padding(16.dp)
    ) {
        Column {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = "RANK STATUS:",
                        color = TextMuted,
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                    Text(
                        text = QuestEngine.getRankName(level),
                        color = TextWhite,
                        fontSize = 18.sp,
                        fontWeight = FontWeight.ExtraBold
                    )
                }

                Column(horizontalAlignment = Alignment.End) {
                    val rankBadge = when (level) {
                        1 -> "E-RANK"
                        2 -> "D-RANK"
                        3 -> "C-RANK"
                        4 -> "B-RANK"
                        5 -> "A-RANK"
                        6 -> "S-RANK"
                        else -> "MONARCH"
                    }
                    Text(
                        text = "LEVEL [$rankBadge]",
                        color = ElectricCyan,
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                    Text(
                        text = "$level",
                        color = ElectricCyan,
                        fontSize = 32.sp,
                        fontWeight = FontWeight.Black,
                        fontFamily = FontFamily.Monospace
                    )
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Progress bar label
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(
                    text = "XP PROGRESS INDEX",
                    color = TextMuted,
                    fontSize = 10.sp,
                    fontFamily = FontFamily.Monospace,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = "$xp / $nextThreshold XP",
                    color = LuminousCyan,
                    fontSize = 10.sp,
                    fontFamily = FontFamily.Monospace,
                    fontWeight = FontWeight.Bold
                )
            }

            Spacer(modifier = Modifier.height(6.dp))

            // Animated clean progress bar
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(8.dp)
                    .clip(RoundedCornerShape(100.dp))
                    .border(0.5.dp, ShadowGrey, RoundedCornerShape(100.dp))
                    .background(ShadowGrey.copy(alpha = 0.5f))
            ) {
                Box(
                    modifier = Modifier
                        .fillMaxHeight()
                        .fillMaxWidth(fraction)
                        .background(
                            Brush.horizontalGradient(
                                listOf(ShadowPurple, ElectricCyan)
                            )
                        )
                )
            }
        }
    }
}

@Composable
fun TaskItemCard(
    task: TaskEntity,
    dayStarted: Boolean,
    onComplete: () -> Unit,
    onSkip: () -> Unit,
    onTriggerSimPrompt: () -> Unit,
    onDelete: () -> Unit
) {
    val difficultyColor = when (task.difficulty) {
        "Hard" -> HunterRed
        "Medium" -> HunterYellow
        else -> HunterGreen
    }

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(DarkNavy.copy(alpha = 0.6f))
            .border(
                1.dp,
                if (task.isCompleted) HunterGreen.copy(alpha = 0.5f) else if (task.isSkipped) HunterRed.copy(alpha = 0.5f) else ShadowGrey,
                RoundedCornerShape(16.dp)
            )
            .padding(16.dp)
    ) {
        Column {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Box(
                        modifier = Modifier
                            .size(10.dp)
                            .background(difficultyColor, RoundedCornerShape(10.dp))
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    
                    val displayTime = remember(task.time) {
                        try {
                            val sdf24 = SimpleDateFormat("HH:mm", Locale.getDefault())
                            val sdf12 = SimpleDateFormat("hh:mm a", Locale.getDefault())
                            sdf12.format(sdf24.parse(task.time)!!)
                        } catch (e: Exception) {
                            task.time
                        }
                    }

                    Text(
                        text = displayTime,
                        color = ElectricCyan,
                        fontSize = 14.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = "${task.durationMinutes}min",
                        color = TextMuted,
                        fontSize = 11.sp,
                        fontFamily = FontFamily.Monospace
                    )

                    // ACTIVE TIMER INDICATOR
                    if (!task.isCompleted && !task.isSkipped) {
                        val (millis, isActive, isUpcoming) = rememberActiveTimer(task)
                        if (isActive || isUpcoming) {
                            Spacer(modifier = Modifier.width(12.dp))
                            Box(
                                modifier = Modifier
                                    .clip(RoundedCornerShape(4.dp))
                                    .background(if (isActive) HunterRed.copy(alpha = 0.2f) else ElectricCyan.copy(alpha = 0.1f))
                                    .border(0.5.dp, if (isActive) HunterRed else ElectricCyan.copy(alpha = 0.5f), RoundedCornerShape(4.dp))
                                    .padding(horizontal = 6.dp, vertical = 2.dp)
                            ) {
                                Row(verticalAlignment = Alignment.CenterVertically) {
                                    Icon(
                                        imageVector = if (isActive) Icons.Default.Timer else Icons.Default.Schedule,
                                        contentDescription = null,
                                        tint = if (isActive) HunterRed else ElectricCyan,
                                        modifier = Modifier.size(10.dp)
                                    )
                                    Spacer(modifier = Modifier.width(4.dp))
                                    Text(
                                        text = (if (isActive) "" else "T-") + formatMillis(millis),
                                        color = if (isActive) HunterRed else ElectricCyan,
                                        fontSize = 9.sp,
                                        fontWeight = FontWeight.Bold,
                                        fontFamily = FontFamily.Monospace
                                    )
                                }
                            }
                        }
                    }
                }

                // Delete Action (Only prior to hunting)
                if (true) {
                    IconButton(onClick = onDelete, modifier = Modifier.size(24.dp)) {
                        Icon(
                            imageVector = Icons.Default.Delete,
                            contentDescription = "Delete Quest",
                            tint = HunterRed.copy(alpha = 0.6f),
                            modifier = Modifier.size(16.dp)
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(6.dp))

            Text(
                text = task.title,
                color = if (task.isCompleted) HunterGreen else if (task.isSkipped) TextMuted else TextWhite,
                fontSize = 15.sp,
                fontWeight = FontWeight.Bold,
                style = if (task.isCompleted) LocalTextStyle.current.copy(textDecoration = TextDecoration.LineThrough) else LocalTextStyle.current
            )

            if (task.customPrompt.isNotEmpty()) {
                Text(
                    text = "Prompt: ${task.customPrompt}",
                    color = TextMuted,
                    fontSize = 11.sp,
                    modifier = Modifier.padding(top = 2.dp)
                )
            }

            Spacer(modifier = Modifier.height(8.dp))

            // Actions or Status Badge
            if (task.isCompleted) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(
                        imageVector = Icons.Default.CheckCircle,
                        contentDescription = "Completed",
                        tint = HunterGreen,
                        modifier = Modifier.size(16.dp)
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = "QUEST SUCCESS (+${if (task.difficulty=="Hard") 40 else if (task.difficulty=="Medium") 20 else 10} XP)",
                        color = HunterGreen,
                        fontSize = 10.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                }
            } else if (task.isSkipped) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(
                        imageVector = Icons.Default.Cancel,
                        contentDescription = "Failed",
                        tint = HunterRed,
                        modifier = Modifier.size(16.dp)
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = "QUEST SKIPPED / FAILING PENALTY",
                        color = HunterRed,
                        fontSize = 10.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                }
            } else if (dayStarted) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Button(
                        onClick = onComplete,
                        colors = ButtonDefaults.buttonColors(containerColor = HunterGreen),
                        shape = RoundedCornerShape(8.dp),
                        modifier = Modifier
                            .weight(1f)
                            .height(32.dp),
                        contentPadding = PaddingValues(0.dp)
                    ) {
                        Text("SUCCESS", color = SpaceBlack, fontSize = 11.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                    }

                    Button(
                        onClick = onSkip,
                        colors = ButtonDefaults.buttonColors(containerColor = DarkNavy),
                        shape = RoundedCornerShape(8.dp),
                        modifier = Modifier
                            .weight(1f)
                            .height(32.dp)
                            .border(1.dp, HunterRed, RoundedCornerShape(8.dp)),
                        contentPadding = PaddingValues(0.dp)
                    ) {
                        Text("SKIP", color = HunterRed, fontSize = 11.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                    }
                }
            } else {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(
                        imageVector = when(task.notificationMode) {
                            "Strict" -> Icons.Default.NotificationsActive
                            "Smart" -> Icons.Default.Notifications
                            else -> Icons.Default.NotificationsOff
                        },
                        contentDescription = "Notify",
                        tint = TextMuted,
                        modifier = Modifier.size(14.dp)
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = "Alarm: ${task.notificationMode}",
                        color = TextMuted,
                        fontSize = 10.sp,
                        fontFamily = FontFamily.Monospace
                    )
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AddTaskDialog(
    onDismiss: () -> Unit,
    onConfirm: (String, String, Int, String, String, String, String?) -> Unit
) {
    var title by remember { mutableStateOf("") }
    
    val currentTime = Calendar.getInstance()
    val timePickerState = rememberTimePickerState(
        initialHour = currentTime.get(Calendar.HOUR_OF_DAY),
        initialMinute = currentTime.get(Calendar.MINUTE),
        is24Hour = false
    )
    
    var showTimePicker by remember { mutableStateOf(false) }
    
    val datePickerState = rememberDatePickerState()
    var showDatePicker by remember { mutableStateOf(false) }
    
    var duration by remember { mutableStateOf("30") }
    var difficulty by remember { mutableStateOf("Easy") }
    var mode by remember { mutableStateOf("Smart") }
    var customPrompt by remember { mutableStateOf("") }

    var titleError by remember { mutableStateOf<String?>(null) }
    var durationError by remember { mutableStateOf<String?>(null) }

    val formattedTime = remember(timePickerState.hour, timePickerState.minute) {
        val cal = Calendar.getInstance()
        cal.set(Calendar.HOUR_OF_DAY, timePickerState.hour)
        cal.set(Calendar.MINUTE, timePickerState.minute)
        SimpleDateFormat("hh:mm a", Locale.getDefault()).format(cal.time)
    }

    val selectedDate = remember(datePickerState.selectedDateMillis) {
        datePickerState.selectedDateMillis?.let {
            SimpleDateFormat("yyyy-MM-dd", Locale.getDefault()).format(Date(it))
        } ?: SimpleDateFormat("yyyy-MM-dd", Locale.getDefault()).format(Date())
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = {
            Text(
                "⚔️ ENGRAVE NEW DAILY QUEST",
                color = ElectricCyan,
                fontSize = 16.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Monospace
            )
        },
        text = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(androidx.compose.foundation.rememberScrollState()),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                OutlinedTextField(
                    value = title,
                    onValueChange = { 
                        title = it
                        if (titleError != null && it.isNotBlank()) {
                            titleError = null
                        }
                    },
                    label = { Text("Quest Title") },
                    isError = titleError != null,
                    supportingText = if (titleError != null) {
                        { Text(titleError!!, color = HunterRed, fontSize = 11.sp, fontFamily = FontFamily.Monospace) }
                    } else null,
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedTextColor = TextWhite,
                        unfocusedTextColor = TextWhite,
                        focusedLabelColor = ElectricCyan,
                        unfocusedLabelColor = TextMuted,
                        focusedBorderColor = ElectricCyan,
                        unfocusedBorderColor = ShadowGrey,
                        errorBorderColor = HunterRed,
                        errorLabelColor = HunterRed
                    ),
                    modifier = Modifier.fillMaxWidth()
                )

                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    // Time Selector
                    Box(modifier = Modifier.weight(1f)) {
                        OutlinedTextField(
                            value = formattedTime,
                            onValueChange = { },
                            readOnly = true,
                            label = { Text("Time") },
                            trailingIcon = {
                                IconButton(onClick = { showTimePicker = true }) {
                                    Icon(Icons.Default.AccessTime, contentDescription = "Pick Time", tint = ElectricCyan)
                                }
                            },
                            colors = OutlinedTextFieldDefaults.colors(
                                focusedTextColor = TextWhite,
                                unfocusedTextColor = TextWhite,
                                focusedBorderColor = ElectricCyan,
                                unfocusedBorderColor = ShadowGrey
                            ),
                            modifier = Modifier.fillMaxWidth()
                        )
                    }

                    OutlinedTextField(
                        value = duration,
                        onValueChange = { 
                            duration = it
                            if (durationError != null) {
                                durationError = null
                            }
                        },
                        label = { Text("Duration (min)") },
                        isError = durationError != null,
                        supportingText = if (durationError != null) {
                            { Text(durationError!!, color = HunterRed, fontSize = 10.sp, fontFamily = FontFamily.Monospace) }
                        } else null,
                        colors = OutlinedTextFieldDefaults.colors(
                            focusedTextColor = TextWhite,
                            unfocusedTextColor = TextWhite,
                            focusedBorderColor = ElectricCyan,
                            unfocusedBorderColor = ShadowGrey,
                            errorBorderColor = HunterRed,
                            errorLabelColor = HunterRed
                        ),
                        modifier = Modifier.weight(1f)
                    )
                }

                // Date Selector
                OutlinedTextField(
                    value = selectedDate,
                    onValueChange = { },
                    readOnly = true,
                    label = { Text("Quest Date") },
                    trailingIcon = {
                        IconButton(onClick = { showDatePicker = true }) {
                            Icon(Icons.Default.CalendarToday, contentDescription = "Pick Date", tint = ElectricCyan)
                        }
                    },
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedTextColor = TextWhite,
                        unfocusedTextColor = TextWhite,
                        focusedBorderColor = ElectricCyan,
                        unfocusedBorderColor = ShadowGrey
                    ),
                    modifier = Modifier.fillMaxWidth()
                )

                // Difficulty selectors
                Text("Quest Rank (Difficulty):", color = TextMuted, fontSize = 11.sp, fontFamily = FontFamily.Monospace)
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(6.dp)
                ) {
                    listOf("Easy", "Medium", "Hard").forEach { diff ->
                        val isSelected = difficulty == diff
                        Box(
                            modifier = Modifier
                                .weight(1f)
                                .clip(RoundedCornerShape(8.dp))
                                .background(if (isSelected) ShadowPurple else DarkNavy)
                                .border(
                                    1.dp,
                                    if (isSelected) ElectricCyan else ShadowGrey,
                                    RoundedCornerShape(8.dp)
                                )
                                .clickable { difficulty = diff }
                                .padding(vertical = 8.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = diff.uppercase(),
                                color = if (isSelected) TextWhite else TextMuted,
                                fontSize = 10.sp,
                                fontWeight = FontWeight.Bold,
                                fontFamily = FontFamily.Monospace
                            )
                        }
                    }
                }

                // Notification level selector
                Text("Notification Guard Mode:", color = TextMuted, fontSize = 11.sp, fontFamily = FontFamily.Monospace)
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(6.dp)
                ) {
                    listOf("Strict", "Smart", "Off").forEach { md ->
                        val isSelected = mode == md
                        Box(
                            modifier = Modifier
                                .weight(1f)
                                .clip(RoundedCornerShape(8.dp))
                                .background(if (isSelected) ShadowPurple else DarkNavy)
                                .border(
                                    1.dp,
                                    if (isSelected) ElectricCyan else ShadowGrey,
                                    RoundedCornerShape(8.dp)
                                )
                                .clickable { mode = md }
                                .padding(vertical = 8.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = md.uppercase(),
                                color = if (isSelected) TextWhite else TextMuted,
                                fontSize = 10.sp,
                                fontWeight = FontWeight.Bold,
                                fontFamily = FontFamily.Monospace
                            )
                        }
                    }
                }

                OutlinedTextField(
                    value = customPrompt,
                    onValueChange = { customPrompt = it },
                    placeholder = { Text("e.g. Did you avoid snacking?") },
                    label = { Text("Custom Prompt Choice (Optional)") },
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedTextColor = TextWhite,
                        unfocusedTextColor = TextWhite,
                        focusedBorderColor = ElectricCyan,
                        unfocusedBorderColor = ShadowGrey
                    ),
                    modifier = Modifier.fillMaxWidth()
                )
            }
        },
        containerColor = DarkNavy,
        shape = RoundedCornerShape(16.dp),
        confirmButton = {
            Button(
                onClick = {
                    val isTitleEmpty = title.isBlank()
                    val durVal = duration.trim().toIntOrNull()
                    val isDurationInvalid = durVal == null || durVal <= 0
                    
                    titleError = if (isTitleEmpty) "Quest Title cannot be empty" else null
                    durationError = if (isDurationInvalid) "Must be > 0" else null
                    
                    if (!isTitleEmpty && !isDurationInvalid) {
                        val finalTime = String.format("%02d:%02d", timePickerState.hour, timePickerState.minute)
                        onConfirm(title.trim(), finalTime, durVal!!, difficulty, mode, customPrompt.trim(), selectedDate)
                    }
                },
                colors = ButtonDefaults.buttonColors(containerColor = ElectricCyan),
                shape = RoundedCornerShape(8.dp)
            ) {
                Text("RECORD", color = SpaceBlack, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("ABORT", color = TextMuted, fontFamily = FontFamily.Monospace)
            }
        }
    )

    if (showTimePicker) {
        AlertDialog(
            onDismissRequest = { showTimePicker = false },
            confirmButton = {
                TextButton(onClick = { showTimePicker = false }) { Text("OK", color = ElectricCyan) }
            },
            dismissButton = {
                TextButton(onClick = { showTimePicker = false }) { Text("CANCEL", color = TextMuted) }
            },
            text = {
                TimePicker(state = timePickerState)
            },
            containerColor = DarkNavy
        )
    }

    if (showDatePicker) {
        DatePickerDialog(
            onDismissRequest = { showDatePicker = false },
            confirmButton = {
                TextButton(onClick = { showDatePicker = false }) { Text("OK", color = ElectricCyan) }
            },
            dismissButton = {
                TextButton(onClick = { showDatePicker = false }) { Text("CANCEL", color = TextMuted) }
            },
            colors = DatePickerDefaults.colors(containerColor = DarkNavy)
        ) {
            DatePicker(state = datePickerState)
        }
    }
}

@Composable
fun EvaluationPopup(
    task: TaskEntity,
    onChooseCompleted: () -> Unit,
    onChooseSkipped: () -> Unit,
    onDismiss: () -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxWidth(0.9f)
            .clip(RoundedCornerShape(20.dp))
            .background(DarkNavy)
            .border(2.dp, Brush.horizontalGradient(listOf(ElectricCyan, ShadowPurple)), RoundedCornerShape(20.dp))
            .padding(24.dp)
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.fillMaxWidth()
        ) {
            Icon(
                imageVector = Icons.Default.PriorityHigh,
                contentDescription = "Alert",
                tint = ShadowPurple,
                modifier = Modifier
                    .size(48.dp)
                    .border(2.dp, ShadowPurple, RoundedCornerShape(48.dp))
                    .padding(8.dp)
            )

            Spacer(modifier = Modifier.height(16.dp))

            Text(
                text = "SYSTEM REGISTRATION INQUIRY",
                color = ElectricCyan,
                fontSize = 12.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Monospace
            )

            Spacer(modifier = Modifier.height(8.dp))

            val promptText = if (task.customPrompt.isNotEmpty()) task.customPrompt else "Did you complete this quest safely?"
            Text(
                text = "\"$promptText\"",
                color = TextWhite,
                fontSize = 18.sp,
                fontWeight = FontWeight.ExtraBold,
                modifier = Modifier.padding(horizontal = 8.dp),
                textAlign = androidx.compose.ui.text.style.TextAlign.Center
            )

            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = "Quest: ${task.title} (${task.time})",
                color = TextMuted,
                fontSize = 12.sp,
                fontFamily = FontFamily.Monospace
            )

            Spacer(modifier = Modifier.height(24.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                Button(
                    onClick = onChooseCompleted,
                    colors = ButtonDefaults.buttonColors(containerColor = HunterGreen),
                    shape = RoundedCornerShape(10.dp),
                    modifier = Modifier
                        .weight(1f)
                        .height(48.dp)
                ) {
                    Text("YES (SUCCESS)", color = SpaceBlack, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                }

                Button(
                    onClick = onChooseSkipped,
                    colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent),
                    shape = RoundedCornerShape(10.dp),
                    modifier = Modifier
                        .weight(1f)
                        .height(48.dp)
                        .border(1.dp, HunterRed, RoundedCornerShape(10.dp))
                ) {
                    Text("NO (PAIN/SKIP)", color = HunterRed, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            TextButton(onClick = onDismiss) {
                Text("CLOSE INQUIRY", color = TextMuted, fontSize = 11.sp, fontFamily = FontFamily.Monospace)
            }
        }
    }
}

@Composable
fun LevelUpCelebration(
    level: Int,
    onAccept: () -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxWidth(0.92f)
            .clip(RoundedCornerShape(24.dp))
            .background(SpaceBlack)
            .border(3.dp, ElectricCyan, RoundedCornerShape(24.dp))
    ) {
        // Drifting neon particle rainfall background VFX
        ConfettiCanvas()

        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier
                .fillMaxWidth()
                .padding(24.dp)
        ) {
            ImageGlowBackground()

            Text(
                text = "⚡ SYSTEM ALERT ⚡",
                color = ElectricCyan,
                fontSize = 14.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Monospace
            )

            Spacer(modifier = Modifier.height(16.dp))

            Text(
                text = "LEVEL UP!",
                color = LuminousCyan,
                fontSize = 42.sp,
                fontWeight = FontWeight.Black,
                fontFamily = FontFamily.SansSerif
            )

            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = "Current Class: ${QuestEngine.getRankName(level)}",
                color = TextWhite,
                fontSize = 16.sp,
                fontWeight = FontWeight.Bold
            )

            Spacer(modifier = Modifier.height(12.dp))

            Text(
                text = "All physiological capabilities have been expanded. Potential is slowly unlocking...",
                color = TextMuted,
                fontSize = 12.sp,
                textAlign = androidx.compose.ui.text.style.TextAlign.Center,
                modifier = Modifier.padding(horizontal = 12.dp)
            )

            Spacer(modifier = Modifier.height(28.dp))

            Button(
                onClick = onAccept,
                colors = ButtonDefaults.buttonColors(
                    containerColor = ShadowPurple
                ),
                shape = RoundedCornerShape(12.dp),
                modifier = Modifier
                    .fillMaxWidth()
                    .height(48.dp)
                    .border(1.dp, ElectricCyan, RoundedCornerShape(12.dp))
            ) {
                Text(
                    text = "CLAIM HIGHER POWER LEVEL",
                    color = TextWhite,
                    fontWeight = FontWeight.ExtraBold,
                    fontFamily = FontFamily.Monospace
                )
            }
        }
    }
}

@Composable
fun ImageGlowBackground() {
    // Custom drawing to show glowing sparks or geometric shield
    Box(
        modifier = Modifier
            .size(100.dp)
            .border(1.dp, ShadowPurple.copy(alpha = 0.5f), RoundedCornerShape(100.dp))
            .background(DarkNavy, RoundedCornerShape(100.dp)),
        contentAlignment = Alignment.Center
    ) {
        Icon(
            imageVector = Icons.Default.Upgrade,
            contentDescription = "Power",
            tint = LuminousCyan,
            modifier = Modifier.size(54.dp)
        )
    }
}

@Composable
fun HabitListSection(
    habits: List<HabitEntity>,
    onToggle: (HabitEntity) -> Unit,
    onAddHabit: (String, String, String) -> Unit,
    onDelete: (HabitEntity) -> Unit
) {
    var habitTitle by remember { mutableStateOf("") }
    var habitDifficulty by remember { mutableStateOf("Easy") } // Easy, Medium, Hard
    var habitCategory by remember { mutableStateOf("Strength") } // Strength, Intellect, Vitality, Sense

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(DarkNavy.copy(alpha = 0.5f))
            .border(1.dp, ShadowGrey, RoundedCornerShape(16.dp))
            .padding(16.dp)
    ) {
        Column {
            Text(
                text = "🧬 DAILY REPEATABLE HABITS",
                color = ElectricCyan,
                fontSize = 12.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Monospace
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = "Daily Quests",
                color = TextWhite,
                fontSize = 18.sp,
                fontWeight = FontWeight.ExtraBold
            )
            Spacer(modifier = Modifier.height(2.dp))
            Text(
                text = "Repeatable daily activities. Completing a habit awards instant XP scaling with difficulty.",
                color = TextMuted,
                fontSize = 11.sp,
                lineHeight = 14.sp
            )

            Spacer(modifier = Modifier.height(14.dp))

            // Habit creation controls
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(8.dp))
                    .background(SpaceBlack.copy(alpha = 0.6f))
                    .padding(8.dp)
            ) {
                OutlinedTextField(
                    value = habitTitle,
                    onValueChange = { habitTitle = it },
                    label = { Text("E.g. 100 Push-ups, Read 10 mins", fontSize = 11.sp) },
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedTextColor = TextWhite,
                        unfocusedTextColor = TextWhite,
                        unfocusedLabelColor = TextMuted,
                        focusedBorderColor = ElectricCyan,
                        unfocusedBorderColor = ShadowGrey
                    ),
                    modifier = Modifier.fillMaxWidth(),
                    singleLine = true
                )

                Spacer(modifier = Modifier.height(6.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    // Difficulty Selector
                    Column {
                        Text(
                            text = "DIFFICULTY MODE",
                            color = TextMuted,
                            fontSize = 8.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.Monospace,
                            modifier = Modifier.padding(bottom = 4.dp)
                        )
                        Row(
                            horizontalArrangement = Arrangement.spacedBy(4.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            listOf("Easy", "Medium", "Hard").forEach { diff ->
                                val isSelected = habitDifficulty == diff
                                val btnColor = when(diff) {
                                    "Hard" -> HunterRed
                                    "Medium" -> HunterYellow
                                    else -> HunterGreen
                                }

                                Box(
                                    modifier = Modifier
                                        .clip(RoundedCornerShape(4.dp))
                                        .background(if (isSelected) btnColor.copy(alpha = 0.15f) else Color.Transparent)
                                        .border(1.dp, if (isSelected) btnColor else ShadowGrey, RoundedCornerShape(4.dp))
                                        .clickable { habitDifficulty = diff }
                                        .padding(horizontal = 8.dp, vertical = 4.dp),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Text(
                                        text = diff.uppercase(),
                                        color = if (isSelected) btnColor else TextMuted,
                                        fontSize = 9.sp,
                                        fontWeight = FontWeight.Bold,
                                        fontFamily = FontFamily.Monospace
                                    )
                                }
                            }
                        }
                    }
                }

                Spacer(modifier = Modifier.height(10.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    // Category Selector Removed
                    Box(modifier = Modifier.weight(1f)) // pushes the add button to the right end

                    // Add Button
                    Button(
                        onClick = {
                            if (habitTitle.isNotBlank()) {
                                onAddHabit(habitTitle.trim(), habitDifficulty, habitCategory)
                                habitTitle = ""
                            }
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = ShadowPurple),
                        shape = RoundedCornerShape(6.dp),
                        contentPadding = PaddingValues(horizontal = 12.dp, vertical = 2.dp),
                        modifier = Modifier.height(28.dp)
                    ) {
                        Icon(Icons.Default.Add, contentDescription = "Add", tint = TextWhite, modifier = Modifier.size(14.dp))
                        Spacer(modifier = Modifier.width(4.dp))
                        Text("ADD QUEST", fontSize = 9.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                    }
                }
            }

            Spacer(modifier = Modifier.height(14.dp))

            // Habit Items List
            if (habits.isEmpty()) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 12.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = "NO REPEATABLE HABITS CONFIGURED",
                        color = TextMuted,
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                }
            } else {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    habits.forEach { habit ->
                        val diffColor = when (habit.difficulty) {
                            "Hard" -> HunterRed
                            "Medium" -> HunterYellow
                            else -> HunterGreen
                        }
                        val xpBonus = when (habit.difficulty) {
                            "Hard" -> 40
                            "Medium" -> 20
                            else -> 10
                        }

                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .clip(RoundedCornerShape(12.dp))
                                .background(SpaceBlack.copy(alpha = 0.4f))
                                .border(
                                    1.dp,
                                    if (habit.isCompletedToday) HunterGreen.copy(alpha = 0.4f) else ShadowGrey,
                                    RoundedCornerShape(12.dp)
                                )
                                .padding(horizontal = 12.dp, vertical = 10.dp),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Row(
                                modifier = Modifier.weight(1f),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                // Toggle Circle
                                Icon(
                                    imageVector = if (habit.isCompletedToday) Icons.Default.CheckCircle else Icons.Default.RadioButtonUnchecked,
                                    contentDescription = "Toggle Habit",
                                    tint = if (habit.isCompletedToday) HunterGreen else ElectricCyan,
                                    modifier = Modifier
                                        .size(24.dp)
                                        .clickable { onToggle(habit) }
                                )

                                Spacer(modifier = Modifier.width(8.dp))

                                // Category Visual Badge Indicator Removed

                                Column {
                                    Text(
                                        text = habit.title,
                                        color = if (habit.isCompletedToday) TextMuted else TextWhite,
                                        fontSize = 13.sp,
                                        fontWeight = FontWeight.Bold,
                                        style = if (habit.isCompletedToday) LocalTextStyle.current.copy(textDecoration = TextDecoration.LineThrough) else LocalTextStyle.current
                                    )
                                    Row(verticalAlignment = Alignment.CenterVertically) {
                                        Text(
                                            text = habit.difficulty.uppercase(),
                                            color = diffColor,
                                            fontSize = 9.sp,
                                            fontWeight = FontWeight.Bold,
                                            fontFamily = FontFamily.Monospace
                                        )
                                        Spacer(modifier = Modifier.width(6.dp))
                                        Text(
                                            text = "+$xpBonus XP",
                                            color = LuminousCyan,
                                            fontSize = 9.sp,
                                            fontWeight = FontWeight.Bold,
                                            fontFamily = FontFamily.Monospace
                                        )
                                    }
                                }
                            }

                            IconButton(
                                onClick = { onDelete(habit) },
                                modifier = Modifier.size(28.dp)
                            ) {
                                Icon(
                                    imageVector = Icons.Default.Close,
                                    contentDescription = "Delete Habit",
                                    tint = HunterRed.copy(alpha = 0.7f),
                                    modifier = Modifier.size(16.dp)
                                )
                            }
                        }
                    }
                }
            }
        }
    }
}

// ==========================================
// NEW SYSTEM PROTOCOL HELPER COMPOSABLES
// ==========================================

@Composable
fun QuestResetTimer() {
    var timeRemaining by remember { mutableStateOf("00:00:00") }
    
    LaunchedEffect(Unit) {
        while (true) {
            val now = java.util.Calendar.getInstance()
            val midnight = java.util.Calendar.getInstance().apply {
                set(java.util.Calendar.HOUR_OF_DAY, 23)
                set(java.util.Calendar.MINUTE, 59)
                set(java.util.Calendar.SECOND, 59)
                set(java.util.Calendar.MILLISECOND, 999)
            }
            var diffMs = midnight.timeInMillis - now.timeInMillis
            if (diffMs < 0) {
                diffMs = 0
            }
            val hours = diffMs / (3600 * 1000)
            val minutes = (diffMs % (3600 * 1000)) / (60 * 1000)
            val seconds = (diffMs % (60 * 1000)) / 1000
            
            timeRemaining = String.format("%02d:%02d:%02d", hours, minutes, seconds)
            kotlinx.coroutines.delay(1000)
        }
    }

    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(6.dp))
            .background(DarkNavy.copy(alpha = 0.7f))
            .border(0.5.dp, HunterRed.copy(alpha = 0.4f), RoundedCornerShape(6.dp))
            .padding(horizontal = 8.dp, vertical = 4.dp)
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Icon(
                imageVector = Icons.Default.HourglassEmpty,
                contentDescription = "Timer",
                tint = HunterRed,
                modifier = Modifier.size(11.dp)
            )
            Spacer(modifier = Modifier.width(4.dp))
            Text(
                text = "SYSTEM RESET IN: $timeRemaining",
                color = HunterRed,
                fontSize = 9.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Monospace
            )
        }
    }
}

@Composable
fun XpGrowthChart(history: List<com.sooraj.sololeveling.data.DayHistoryEntity>, currentXp: Int) {
    // Generate previous 7 dates (YYYY-MM-DD), ending with today
    val sdf = remember { java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.getDefault()) }
    val dayLabels = remember {
        val labelSdf = java.text.SimpleDateFormat("E", java.util.Locale.getDefault())
        (0..6).map { i ->
            val cal = java.util.Calendar.getInstance()
            cal.add(java.util.Calendar.DAY_OF_YEAR, -i)
            labelSdf.format(cal.time).uppercase()
        }.reversed()
    }
    
    val dateStrings = remember {
        (0..6).map { i ->
            val cal = java.util.Calendar.getInstance()
            cal.add(java.util.Calendar.DAY_OF_YEAR, -i)
            sdf.format(cal.time)
        }.reversed()
    }

    val dailyGains = remember(history, dateStrings) {
        dateStrings.map { dateStr ->
            history.find { it.dateString == dateStr }?.xpEarned ?: 0
        }
    }

    val cumulativeXp = remember(dailyGains, currentXp) {
        val xpPoints = FloatArray(7)
        xpPoints[6] = currentXp.toFloat()
        for (i in 5 downTo 0) {
            xpPoints[i] = (xpPoints[i + 1] - dailyGains[i + 1]).coerceAtLeast(0f)
        }
        xpPoints.toList()
    }

    val minXp = cumulativeXp.minOrNull() ?: 0f
    val maxXp = cumulativeXp.maxOrNull() ?: 100f
    val range = if (maxXp - minXp == 0f) 100f else maxXp - minXp

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(DarkNavy.copy(alpha = 0.6f))
            .border(1.dp, ShadowGrey, RoundedCornerShape(16.dp))
            .padding(14.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(
                    text = "🧬 XP EXTRACTION TRAJECTORY",
                    color = ElectricCyan,
                    fontSize = 10.sp,
                    fontWeight = FontWeight.Bold,
                    fontFamily = FontFamily.Monospace
                )
                Text(
                    text = "Weekly XP Growth",
                    color = TextWhite,
                    fontSize = 15.sp,
                    fontWeight = FontWeight.Bold
                )
            }
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(4.dp))
                    .background(ShadowPurple.copy(alpha = 0.2f))
                    .border(0.5.dp, ShadowPurple, RoundedCornerShape(4.dp))
                    .padding(horizontal = 6.dp, vertical = 2.dp)
            ) {
                Text(
                    text = "7D ACTIVE",
                    color = LuminousCyan,
                    fontSize = 8.sp,
                    fontWeight = FontWeight.Bold,
                    fontFamily = FontFamily.Monospace
                )
            }
        }

        Spacer(modifier = Modifier.height(14.dp))

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(115.dp)
        ) {
            Canvas(modifier = Modifier.fillMaxSize()) {
                val w = size.width
                val h = size.height
                val padY = 12.dp.toPx()
                val activeH = h - padY * 2
                val activeW = w
                
                val colW = activeW / 6f

                val coords = cumulativeXp.mapIndexed { index, xp ->
                    val x = index * colW
                    val normalizedY = (xp - minXp) / range
                    val y = padY + (activeH * (1f - normalizedY))
                    Offset(x, y)
                }

                val gridColor = ShadowGrey.copy(alpha = 0.2f)
                val linesCount = 3
                for (j in 0..linesCount) {
                    val gridY = padY + (activeH * j / linesCount)
                    drawLine(
                        color = gridColor,
                        start = Offset(0f, gridY),
                        end = Offset(w, gridY),
                        strokeWidth = 1.dp.toPx()
                    )
                }

                val linePath = androidx.compose.ui.graphics.Path().apply {
                    if (coords.isNotEmpty()) {
                        moveTo(coords[0].x, coords[0].y)
                        for (i in 1 until coords.size) {
                            val prev = coords[i - 1]
                            val curr = coords[i]
                            val cpX = (prev.x + curr.x) / 2
                            cubicTo(cpX, prev.y, cpX, curr.y, curr.x, curr.y)
                        }
                    }
                }

                val fillPath = androidx.compose.ui.graphics.Path().apply {
                    addPath(linePath)
                    lineTo(coords.last().x, h)
                    lineTo(coords.first().x, h)
                    close()
                }
                drawPath(
                    path = fillPath,
                    brush = Brush.verticalGradient(
                        colors = listOf(ElectricCyan.copy(alpha = 0.2f), Color.Transparent)
                    )
                )

                drawPath(
                    path = linePath,
                    brush = Brush.horizontalGradient(listOf(ShadowPurple, ElectricCyan)),
                    style = Stroke(width = 2.dp.toPx())
                )

                coords.forEachIndexed { index, pt ->
                    drawCircle(
                        color = ShadowPurple,
                        radius = 5.dp.toPx(),
                        center = pt
                    )
                    drawCircle(
                        color = ElectricCyan,
                        radius = 2.5.dp.toPx(),
                        center = pt
                    )
                }
            }
        }

        Spacer(modifier = Modifier.height(10.dp))

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            dayLabels.forEachIndexed { index, label ->
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(
                        text = label,
                        color = TextMuted,
                        fontSize = 9.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                    Spacer(modifier = Modifier.height(2.dp))
                    Text(
                        text = "${cumulativeXp[index].toInt()}",
                        color = if (index == 6) LuminousCyan else TextWhite.copy(alpha = 0.6f),
                        fontSize = 9.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                }
            }
        }
    }
}

@Composable
fun ConfettiCanvas() {
    val particleList = remember {
        List(40) {
            val angle = Math.random() * 2 * Math.PI
            val speed = Math.random() * 6 + 2
            PhysicsParticle(
                x = (Math.random() * 0.9 + 0.05).toFloat(),
                y = -0.05f,
                vx = (Math.sin(angle) * 1.5).toFloat(),
                vy = (Math.random() * 6 + 3).toFloat(),
                color = listOf(ElectricCyan, ShadowPurple, LuminousCyan, HunterYellow, HunterRed, Color.White).random(),
                rotation = (Math.random() * 360).toFloat(),
                rotSpeed = (Math.random() * 6 - 3).toFloat(),
                size = (Math.random() * 12 + 8).toFloat(),
                alpha = 1f
            )
        }
    }

    var frameTick by remember { mutableStateOf(0) }

    LaunchedEffect(Unit) {
        while (true) {
            particleList.forEach { p ->
                p.y += p.vy * 0.008f
                p.x += p.vx * 0.005f
                p.rotation += p.rotSpeed
                if (p.y > 1.1f) {
                    p.y = -0.05f
                    p.x = (Math.random() * 0.9 + 0.05).toFloat()
                    p.vy = (Math.random() * 6 + 3).toFloat()
                    p.alpha = 1f
                } else if (p.y > 0.8f) {
                    p.alpha = ((1.0f - p.y) / 0.3f).coerceIn(0f, 1f)
                }
            }
            frameTick++
            kotlinx.coroutines.delay(16)
        }
    }

    Canvas(modifier = Modifier.fillMaxSize()) {
        val w = size.width
        val h = size.height
        val tick = frameTick 
        
        particleList.forEach { p ->
            if (p.alpha > 0f) {
                val cx = p.x * w
                val cy = p.y * h
                
                rotate(p.rotation, pivot = Offset(cx, cy)) {
                    drawRect(
                        color = p.color.copy(alpha = p.alpha),
                        topLeft = Offset(cx - p.size/2, cy - p.size/2),
                        size = androidx.compose.ui.geometry.Size(p.size, p.size)
                    )
                }
            }
        }
    }
}

@Composable
fun rememberActiveTimer(task: TaskEntity): Triple<Long, Boolean, Boolean> {
    // (RemainingMillis, isActive, isUpcoming)
    var state by remember { mutableStateOf(Triple(0L, false, false)) }

    LaunchedEffect(task.time, task.durationMinutes, task.dateString) {
        while (true) {
            val now = Calendar.getInstance()
            val timeParts = task.time.split(":")
            if (timeParts.size == 2) {
                val hour = timeParts[0].toIntOrNull() ?: 0
                val minute = timeParts[1].toIntOrNull() ?: 0
                
                val taskCal = Calendar.getInstance()
                if (task.dateString.isNotEmpty()) {
                    try {
                        val sdf = SimpleDateFormat("yyyy-MM-dd", Locale.getDefault())
                        val date = sdf.parse(task.dateString)
                        if (date != null) {
                            taskCal.time = date
                        }
                    } catch (e: Exception) {}
                }

                val startCal = Calendar.getInstance().apply {
                    set(Calendar.YEAR, taskCal.get(Calendar.YEAR))
                    set(Calendar.MONTH, taskCal.get(Calendar.MONTH))
                    set(Calendar.DAY_OF_MONTH, taskCal.get(Calendar.DAY_OF_MONTH))
                    set(Calendar.HOUR_OF_DAY, hour)
                    set(Calendar.MINUTE, minute)
                    set(Calendar.SECOND, 0)
                    set(Calendar.MILLISECOND, 0)
                }
                
                val endCal = (startCal.clone() as Calendar).apply {
                    add(Calendar.MINUTE, task.durationMinutes)
                }
                
                if (now.after(startCal) && now.before(endCal)) {
                    state = Triple(endCal.timeInMillis - now.timeInMillis, true, false)
                } else if (now.before(startCal)) {
                    // Only show T- countdown if it's within the next 24 hours to avoid clutter
                    val diff = startCal.timeInMillis - now.timeInMillis
                    if (diff < 24 * 60 * 60 * 1000L) {
                        state = Triple(diff, false, true)
                    } else {
                        state = Triple(0L, false, false)
                    }
                } else {
                    state = Triple(0L, false, false)
                }
            }
            kotlinx.coroutines.delay(1000)
        }
    }
    return state
}

fun formatMillis(millis: Long): String {
    val seconds = (millis / 1000) % 60
    val minutes = (millis / (1000 * 60)) % 60
    val hours = (millis / (1000 * 60 * 60))
    return if (hours > 0) {
        String.format("%02d:%02d:%02d", hours, minutes, seconds)
    } else {
        String.format("%02d:%02d", minutes, seconds)
    }
}

class PhysicsParticle(
    var x: Float,
    var y: Float,
    var vx: Float,
    var vy: Float,
    var color: Color,
    var rotation: Float,
    var rotSpeed: Float,
    var size: Float,
    var alpha: Float
)

// ==========================================
// SYSTEM COMPANION HABIT & ARCHIVE LOG COMPOSABLES
// ==========================================

@Composable
fun HabitCategoryIcon(category: String, isCompleted: Boolean) {
    val tint = when (category) {
        "Strength" -> ElectricCyan
        "Intellect" -> ShadowPurple
        "Vitality" -> HunterGreen
        "Sense" -> HunterYellow
        else -> ElectricCyan
    }

    val iconVector = when (category) {
        "Strength" -> Icons.Default.FitnessCenter
        "Intellect" -> Icons.Default.MenuBook
        "Vitality" -> Icons.Default.Favorite
        "Sense" -> Icons.Default.Visibility
        else -> Icons.Default.FitnessCenter
    }

    Box(
        modifier = Modifier
            .size(28.dp)
            .clip(RoundedCornerShape(6.dp))
            .background(tint.copy(alpha = if (isCompleted) 0.05f else 0.12f))
            .border(1.dp, tint.copy(alpha = if (isCompleted) 0.2f else 0.6f), RoundedCornerShape(6.dp)),
        contentAlignment = Alignment.Center
    ) {
        Icon(
            imageVector = iconVector,
            contentDescription = category,
            tint = if (isCompleted) tint.copy(alpha = 0.4f) else tint,
            modifier = Modifier.size(15.dp)
        )
    }
}

@Composable
fun QuestHistorySection(
    historyLogs: List<QuestHistoryEntity>,
    onClearAll: () -> Unit,
    onDeleteLog: (QuestHistoryEntity) -> Unit
) {
    var isExpanded by remember { mutableStateOf(false) }

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(DarkNavy.copy(alpha = 0.5f))
            .border(1.dp, ShadowGrey, RoundedCornerShape(16.dp))
            .padding(16.dp)
    ) {
        Column {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = "📜 SYSTEM ARCHIVE PROTOCOLS",
                        color = ElectricCyan,
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                    Text(
                        text = "Quest History",
                        color = TextWhite,
                        fontSize = 18.sp,
                        fontWeight = FontWeight.ExtraBold
                    )
                }

                Row(verticalAlignment = Alignment.CenterVertically) {
                    if (isExpanded && historyLogs.isNotEmpty()) {
                        Text(
                            text = "CLEAR ALL",
                            color = HunterRed,
                            fontSize = 9.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.Monospace,
                            modifier = Modifier
                                .clickable { onClearAll() }
                                .padding(horizontal = 8.dp, vertical = 6.dp)
                        )
                    }
                    
                    IconButton(onClick = { isExpanded = !isExpanded }, modifier = Modifier.size(28.dp)) {
                        Icon(
                            imageVector = if (isExpanded) Icons.Default.ExpandLess else Icons.Default.ExpandMore,
                            contentDescription = "Expand Quest History",
                            tint = ElectricCyan
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(2.dp))
            Text(
                text = "Secure local record of successfully completed quests, daily active template tasks, and stat repeatable habits over the past 30 days.",
                color = TextMuted,
                fontSize = 11.sp,
                lineHeight = 14.sp
            )

            if (isExpanded) {
                Spacer(modifier = Modifier.height(14.dp))

                if (historyLogs.isEmpty()) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(vertical = 24.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = "NO RECENT SYSTEM KEY LOGS RECORDED",
                            color = TextMuted,
                            fontSize = 10.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.Monospace
                        )
                    }
                } else {
                    val sdf = remember { java.text.SimpleDateFormat("MMM dd, HH:mm", java.util.Locale.getDefault()) }
                    Column(
                        verticalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.heightIn(max = 240.dp).verticalScroll(rememberScrollState())
                    ) {
                        for (log in historyLogs) {
                            val timeStr = remember(log.completedAt) { sdf.format(java.util.Date(log.completedAt)) }
                            val tint = when (log.type) {
                                "Daily Habit" -> ShadowPurple
                                "Weekly Quest" -> HunterYellow
                                else -> ElectricCyan
                            }

                            Row(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .clip(RoundedCornerShape(8.dp))
                                    .background(SpaceBlack.copy(alpha = 0.5f))
                                    .border(0.5.dp, ShadowGrey, RoundedCornerShape(8.dp))
                                    .padding(8.dp),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Row(
                                    modifier = Modifier.weight(1f),
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Box(
                                        modifier = Modifier
                                            .size(6.dp)
                                            .clip(RoundedCornerShape(50.dp))
                                            .background(tint)
                                    )
                                    Spacer(modifier = Modifier.width(8.dp))

                                    Column {
                                        Text(
                                            text = log.title,
                                            color = TextWhite,
                                            fontSize = 12.sp,
                                            fontWeight = FontWeight.Bold
                                        )
                                        Row(verticalAlignment = Alignment.CenterVertically) {
                                            Text(
                                                text = log.type.uppercase(),
                                                color = tint,
                                                fontSize = 8.sp,
                                                fontWeight = FontWeight.Bold,
                                                fontFamily = FontFamily.Monospace
                                            )
                                            Spacer(modifier = Modifier.width(6.dp))
                                            Text(
                                                text = timeStr,
                                                color = TextMuted,
                                                fontSize = 8.sp,
                                                fontFamily = FontFamily.Monospace
                                            )
                                        }
                                    }
                                }

                                Row(verticalAlignment = Alignment.CenterVertically) {
                                    Text(
                                        text = "+${log.xpEarned} XP",
                                        color = LuminousCyan,
                                        fontSize = 10.sp,
                                        fontWeight = FontWeight.Black,
                                        fontFamily = FontFamily.Monospace
                                    )
                                    Spacer(modifier = Modifier.width(6.dp))
                                    Icon(
                                        imageVector = Icons.Default.Delete,
                                        contentDescription = "Delete Log Entry",
                                        tint = TextMuted,
                                        modifier = Modifier
                                            .size(14.dp)
                                            .clickable { onDeleteLog(log) }
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun HunterRankCard(
    stats: StatsEntity?,
    onNavigateToProfile: () -> Unit
) {
    if (stats == null) return

    val currentLevel = stats.level
    val rankText = QuestEngine.getRankName(currentLevel)
    val rankSymbol = when (currentLevel) {
        1 -> "E"
        2 -> "D"
        3 -> "C"
        4 -> "B"
        5 -> "A"
        6 -> "S"
        7 -> "S" // National Level
        else -> "M" // Monarch
    }
    
    val rankColor = when (currentLevel) {
        1 -> Color(0xFF94A3B8) // E: Grey
        2 -> Color(0xFF10B981) // D: Green
        3 -> Color(0xFF1B70F0) // C: Blue
        4 -> Color(0xFF8B5CF6) // B: Purple
        5 -> Color(0xFFFBBF24) // A: Amber
        6 -> Color(0xFFEF4444) // S: Red
        7 -> Color(0xFF00F2FF) // National Level: Cyan glow
        else -> Color(0xFF7000FF)
    }

    val avatars = listOf(
        Icons.Default.Shield,            // 0: Commander Shield
        Icons.Default.FlashOn,           // 1: Flash Pulse
        Icons.Default.AutoAwesome,       // 2: Magic Cosmos
        Icons.Default.Palette,           // 3: Designer
        Icons.Default.EmojiEvents,       // 4: Monarch
        Icons.Default.SportsMartialArts  // 5: Shadow Strike
    )
    val avatarIcon = avatars.getOrElse(stats.avatarIndex) { Icons.Default.Shield }

    val titleList = listOf(
        "The Weakest Hunter" to (currentLevel >= 1),
        "E-Rank Survivor" to (currentLevel >= 1),
        "Trial Conqueror" to (currentLevel >= 2),
        "Slayer of Beasts" to (currentLevel >= 3),
        "Gate Clearer Guildmaster" to (currentLevel >= 4),
        "Crypt Raider" to (currentLevel >= 5),
        "Demonic Aristocrat" to (currentLevel >= 6),
        "Shadow Monarch" to (currentLevel >= 6),
        "National Level Monarch" to (currentLevel >= 7)
    )
    val activeTitle = titleList.getOrNull(stats.titleIndex)?.first ?: "The Weakest Hunter"

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(
                Brush.verticalGradient(
                    listOf(DarkNavy, SpaceBlack)
                )
            )
            .border(1.5.dp, rankColor.copy(alpha = 0.6f), RoundedCornerShape(16.dp))
            .clickable { onNavigateToProfile() }
            .padding(16.dp)
    ) {
        Canvas(modifier = Modifier.matchParentSize()) {
            val accentColor = rankColor.copy(alpha = 0.08f)
            drawLine(
                color = accentColor,
                start = Offset(0f, 0f),
                end = Offset(size.width, size.height),
                strokeWidth = 2f
            )
            drawCircle(
                color = accentColor,
                center = Offset(size.width * 0.85f, size.height * 0.4f),
                radius = size.height * 0.4f
            )
        }

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier.weight(1f)
            ) {
                Box(
                    modifier = Modifier
                        .size(64.dp)
                        .clip(RoundedCornerShape(12.dp))
                        .background(SpaceBlack)
                        .border(1.5.dp, rankColor, RoundedCornerShape(12.dp)),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = avatarIcon,
                        contentDescription = "Avatar Badge",
                        tint = rankColor,
                        modifier = Modifier.size(34.dp)
                    )
                    
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .padding(2.dp),
                        contentAlignment = Alignment.BottomEnd
                    ) {
                        Text(
                            text = "Lvl.${stats.level}",
                            color = rankColor,
                            fontSize = 8.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.Monospace,
                            modifier = Modifier
                                .background(SpaceBlack.copy(alpha = 0.8f))
                                .padding(horizontal = 3.dp, vertical = 1.dp)
                        )
                    }
                }

                Spacer(modifier = Modifier.width(16.dp))

                Column {
                    Text(
                        text = "DESIGNATION",
                        color = Color.White.copy(alpha = 0.4f),
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                    Text(
                        text = stats.username.uppercase(),
                        color = TextWhite,
                        fontSize = 16.sp,
                        fontWeight = FontWeight.ExtraBold,
                        fontFamily = FontFamily.Monospace,
                        letterSpacing = 0.5.sp
                    )

                    Spacer(modifier = Modifier.height(4.dp))

                    Text(
                        text = "TITLE: $activeTitle",
                        color = HunterYellow,
                        fontSize = 9.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                }
            }

            Box(
                modifier = Modifier
                    .size(56.dp)
                    .clip(CutCornerShape(8.dp))
                    .background(rankColor.copy(alpha = 0.15f))
                    .border(2.dp, rankColor, CutCornerShape(8.dp)),
                contentAlignment = Alignment.Center
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(
                        text = rankSymbol,
                        color = rankColor,
                        fontSize = 24.sp,
                        fontWeight = FontWeight.Black,
                        fontFamily = FontFamily.Monospace
                    )
                    Text(
                        text = "RANK",
                        color = rankColor,
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace,
                        letterSpacing = 1.sp
                    )
                }
            }
        }
    }
}

