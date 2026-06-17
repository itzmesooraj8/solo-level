package com.sooraj.sololeveling

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.view.WindowManager
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.biometric.BiometricManager
import androidx.biometric.BiometricPrompt
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CalendarMonth
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Shield
import androidx.compose.material.icons.filled.Warning
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.core.content.ContextCompat
import androidx.fragment.app.FragmentActivity
import androidx.lifecycle.lifecycleScope
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.sooraj.sololeveling.data.AppDatabase
import com.sooraj.sololeveling.data.TaskAlarmScheduler
import com.sooraj.sololeveling.ui.*
import com.sooraj.sololeveling.ui.theme.*
import kotlinx.coroutines.launch

class MainActivity : FragmentActivity() {

    private val viewModel: SoloLevelingViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        // Observe anti-leak preference and apply FLAG_SECURE
        lifecycleScope.launch {
            viewModel.statsState.collect { stats ->
                val antiLeak = stats?.antiLeakEnabled ?: true
                if (antiLeak) {
                    window.setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE)
                } else {
                    window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
                }
            }
        }

        // Uncaught JVM Exception Handler integration
        val baseHandler = Thread.getDefaultUncaughtExceptionHandler()
        Thread.setDefaultUncaughtExceptionHandler { _, throwable ->
            viewModel.reportSystemCrash(throwable)
            baseHandler?.uncaughtException(Thread.currentThread(), throwable)
        }

        // Request POST_NOTIFICATIONS permissions on Android 13+
        requestNotificationPermission()

        // Check and prompt for exact alarm permission on Android 12+
        checkExactAlarmPermission()

        // Prompt for battery optimization exemption for reliable background alarms
        checkBatteryOptimization()

        // Reschedule alarms for active tasks (after reboot or force-stop)
        rescheduleAlarmsOnLaunch()

        // Scan launch intents for incoming notification callbacks
        handleIncomingTaskPromptIntent(intent)

        setContent {
            MyApplicationTheme {
                val runtimeError by viewModel.runtimeError.collectAsState()
                val isAuthenticated by viewModel.isAuthenticated.collectAsState()
                val activeStrictTask by viewModel.activeStrictTask.collectAsState()

                if (runtimeError != null) {
                    // Solo Leveling style system deviation screen
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(SpaceBlack)
                            .padding(24.dp),
                        contentAlignment = androidx.compose.ui.Alignment.Center,
                    ) {
                        Column(
                            horizontalAlignment = androidx.compose.ui.Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.spacedBy(16.dp),
                            modifier = Modifier
                                .fillMaxWidth()
                                .clip(RoundedCornerShape(16.dp))
                                .background(DarkNavy)
                                .border(1.5.dp, Color(0xFFEF4444), RoundedCornerShape(16.dp))
                                .padding(24.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Default.Warning,
                                contentDescription = "System Warning",
                                tint = Color(0xFFEF4444),
                                modifier = Modifier.size(48.dp)
                            )

                            Text(
                                text = "⚠️ COHERENCE CRITICAL ERROR",
                                color = Color(0xFFEF4444),
                                fontSize = 16.sp,
                                fontWeight = FontWeight.Bold,
                                fontFamily = FontFamily.Monospace,
                                letterSpacing = 1.sp
                            )

                            Text(
                                text = "The Shadow Core Encountered a Critical Runtime Deviation:",
                                color = TextWhite,
                                fontSize = 12.sp,
                                textAlign = androidx.compose.ui.text.style.TextAlign.Center,
                                fontFamily = FontFamily.Monospace
                            )

                            Box(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .height(140.dp)
                                    .clip(RoundedCornerShape(8.dp))
                                    .background(SpaceBlack)
                                    .border(1.dp, ShadowGrey, RoundedCornerShape(8.dp))
                                    .padding(12.dp)
                                    .verticalScroll(rememberScrollState())
                            ) {
                                Text(
                                    text = runtimeError?.stackTraceToString() ?: "No message logs available.",
                                    color = Color(0xFFEF4444).copy(alpha = 0.85f),
                                    fontSize = 9.sp,
                                    fontFamily = FontFamily.Monospace,
                                    lineHeight = 12.sp
                                )
                            }

                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.spacedBy(8.dp)
                            ) {
                                Button(
                                    onClick = { viewModel.clearRuntimeError() },
                                    colors = ButtonDefaults.buttonColors(containerColor = ShadowPurple),
                                    modifier = Modifier.weight(1f),
                                    shape = RoundedCornerShape(8.dp)
                                ) {
                                    Text("REBOOT SYSTEM", fontSize = 11.sp, fontFamily = FontFamily.Monospace, color = TextWhite)
                                }

                                Button(
                                    onClick = {
                                        viewModel.forceResetData()
                                        viewModel.clearRuntimeError()
                                    },
                                    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFFEF4444)),
                                    modifier = Modifier.weight(1f),
                                    shape = RoundedCornerShape(8.dp)
                                ) {
                                    Text("HARD RESET", fontSize = 11.sp, fontFamily = FontFamily.Monospace, color = TextWhite)
                                }
                            }
                        }
                    }
                } else if (!isAuthenticated) {
                    // MASTER GATE SECURITY ACCESS
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(SpaceBlack),
                        contentAlignment = androidx.compose.ui.Alignment.Center
                    ) {
                        Column(
                            horizontalAlignment = androidx.compose.ui.Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.spacedBy(24.dp),
                            modifier = Modifier.padding(32.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Default.Lock,
                                contentDescription = "System Gate",
                                tint = ElectricCyan,
                                modifier = Modifier.size(80.dp)
                            )
                            
                            Text(
                                text = "SYSTEM GATE ACCESS",
                                color = ElectricCyan,
                                fontSize = 20.sp,
                                fontWeight = FontWeight.ExtraBold,
                                fontFamily = FontFamily.Monospace,
                                letterSpacing = 2.sp
                            )
                            
                            Text(
                                text = "Identity verification required to initialize the Monarch Protocol.",
                                color = TextMuted,
                                fontSize = 12.sp,
                                textAlign = androidx.compose.ui.text.style.TextAlign.Center,
                                fontFamily = FontFamily.Monospace
                            )

                            Button(
                                onClick = { triggerBiometricAuth() },
                                colors = ButtonDefaults.buttonColors(containerColor = ShadowPurple),
                                shape = RoundedCornerShape(8.dp),
                                modifier = Modifier.fillMaxWidth().height(56.dp)
                            ) {
                                Text("INITIATE AWAKENING", fontSize = 14.sp, fontWeight = FontWeight.Bold, fontFamily = FontFamily.Monospace)
                            }
                        }
                    }
                } else if (activeStrictTask != null) {
                    // Strict Mode Lock Screen
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(SpaceBlack),
                        contentAlignment = androidx.compose.ui.Alignment.Center
                    ) {
                        Column(
                            horizontalAlignment = androidx.compose.ui.Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.spacedBy(16.dp),
                            modifier = Modifier.padding(24.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Default.Shield,
                                contentDescription = "Strict Lock",
                                tint = Color(0xFFEF4444),
                                modifier = Modifier.size(80.dp)
                            )
                            Text(
                                text = "⚠️ SYSTEM LOCK: QUEST IN PROGRESS",
                                color = Color(0xFFEF4444),
                                fontSize = 18.sp,
                                fontWeight = FontWeight.Bold,
                                fontFamily = FontFamily.Monospace
                            )
                            Text(
                                text = "Active Quest: ${activeStrictTask?.title}",
                                color = TextWhite,
                                fontSize = 14.sp,
                                fontFamily = FontFamily.Monospace
                            )
                            Text(
                                text = "Strict Mode is active. You must complete this task or wait for the duration to end. Failure to comply will result in severe XP penalties.",
                                color = TextMuted,
                                fontSize = 12.sp,
                                textAlign = androidx.compose.ui.text.style.TextAlign.Center,
                                fontFamily = FontFamily.Monospace
                            )
                            Spacer(modifier = Modifier.height(20.dp))
                            Button(
                                onClick = { activeStrictTask?.let { viewModel.completeQuest(it) } },
                                colors = ButtonDefaults.buttonColors(containerColor = HunterGreen),
                                modifier = Modifier.fillMaxWidth(),
                                shape = RoundedCornerShape(8.dp)
                            ) {
                                Text("I COMPLETED THE QUEST", color = SpaceBlack, fontWeight = FontWeight.Bold)
                            }
                            OutlinedButton(
                                onClick = { activeStrictTask?.let { viewModel.skipQuest(it) } },
                                colors = ButtonDefaults.outlinedButtonColors(contentColor = HunterRed),
                                modifier = Modifier.fillMaxWidth(),
                                shape = RoundedCornerShape(8.dp),
                                border = androidx.compose.foundation.BorderStroke(1.dp, HunterRed)
                            ) {
                                Text("I GIVE UP (PENALTY)")
                            }
                        }
                    }
                } else {
                    val navController = rememberNavController()
                    val navBackStackEntry by navController.currentBackStackEntryAsState()
                    val currentRoute = navBackStackEntry?.destination?.route

                    Scaffold(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(SpaceBlack),
                        bottomBar = {
                            NavigationBar(
                                containerColor = DarkNavy,
                                tonalElevation = 8.dp,
                                modifier = Modifier
                                    .navigationBarsPadding()
                                    .height(64.dp)
                                    .clip(RoundedCornerShape(topStart = 16.dp, topEnd = 16.dp))
                                    .border(1.dp, ShadowGrey, RoundedCornerShape(topStart = 16.dp, topEnd = 16.dp))
                            ) {
                                val items = listOf(
                                    NavigationBarItemData("dashboard", "Home", Icons.Default.Home),
                                    NavigationBarItemData("quests", "Quests", Icons.Default.Shield),
                                    NavigationBarItemData("calendar", "Chrono", Icons.Default.CalendarMonth),
                                    NavigationBarItemData("profile", "Matrix", Icons.Default.Person)
                                )

                                items.forEach { item ->
                                    val selected = currentRoute == item.route
                                    NavigationBarItem(
                                        selected = selected,
                                        onClick = {
                                            navController.navigate(item.route) {
                                                popUpTo(navController.graph.findStartDestination().id) {
                                                    saveState = true
                                                }
                                                launchSingleTop = true
                                                restoreState = true
                                            }
                                        },
                                        icon = {
                                            Icon(
                                                imageVector = item.icon,
                                                contentDescription = item.label,
                                                tint = if (selected) ElectricCyan else TextMuted
                                            )
                                        },
                                        label = {
                                            Text(
                                                text = item.label.uppercase(),
                                                color = if (selected) ElectricCyan else TextMuted,
                                                fontSize = 9.sp,
                                                fontWeight = FontWeight.Bold,
                                                fontFamily = FontFamily.Monospace
                                            )
                                        },
                                        colors = NavigationBarItemDefaults.colors(
                                            indicatorColor = ShadowPurple.copy(alpha = 0.3f)
                                        )
                                    )
                                }
                            }
                        }
                    ) { innerPadding ->
                        NavHost(
                            navController = navController,
                            startDestination = "dashboard",
                            modifier = Modifier.padding(innerPadding)
                        ) {
                            composable("dashboard") {
                                DashboardScreen(
                                    viewModel = viewModel,
                                    onRequestNotificationPermission = { requestNotificationPermission() }
                                ) {
                                    navController.navigate("quests")
                                }
                            }
                            composable("quests") {
                                QuestsScreen(viewModel = viewModel)
                            }
                            composable("calendar") {
                                CalendarScreen(viewModel = viewModel)
                            }
                            composable("profile") {
                                ProfileScreen(viewModel = viewModel)
                            }
                        }
                    }
                }
            }
        }
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        handleIncomingTaskPromptIntent(intent)
    }

    private fun triggerBiometricAuth() {
        val executor = ContextCompat.getMainExecutor(this)
        val biometricPrompt = BiometricPrompt(this, executor,
            object : BiometricPrompt.AuthenticationCallback() {
                override fun onAuthenticationError(errorCode: Int, errString: CharSequence) {
                    super.onAuthenticationError(errorCode, errString)
                    // If no biometric hardware or enrolled, we allow it (or use PIN if allowed)
                    if (errorCode == BiometricPrompt.ERROR_NO_BIOMETRICS || 
                        errorCode == BiometricPrompt.ERROR_HW_NOT_PRESENT ||
                        errorCode == BiometricPrompt.ERROR_NO_DEVICE_CREDENTIAL) {
                        viewModel.setAuthenticated(true)
                    }
                }

                override fun onAuthenticationSucceeded(result: BiometricPrompt.AuthenticationResult) {
                    super.onAuthenticationSucceeded(result)
                    viewModel.setAuthenticated(true)
                }

                override fun onAuthenticationFailed() {
                    super.onAuthenticationFailed()
                }
            })

        val promptInfo = BiometricPrompt.PromptInfo.Builder()
            .setTitle("System Access Protocol")
            .setSubtitle("Authenticate to access the Shadow Core")
            .setAllowedAuthenticators(BiometricManager.Authenticators.BIOMETRIC_STRONG or BiometricManager.Authenticators.DEVICE_CREDENTIAL)
            .build()

        biometricPrompt.authenticate(promptInfo)
    }

    private fun handleIncomingTaskPromptIntent(intent: Intent?) {
        if (intent == null) return
        val taskId = intent.getIntExtra("SHOW_TASK_PROMPT_ID", -1)
        if (taskId != -1) {
            lifecycleScope.launch {
                val db = AppDatabase.getInstance(applicationContext)
                val task = db.taskDao.getTaskById(taskId)
                task?.let {
                    viewModel.triggerSimulatedPrompt(it)
                }
            }
        }
    }

    private fun requestNotificationPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                requestPermissions(arrayOf(Manifest.permission.POST_NOTIFICATIONS), 101)
            }
        }
    }

    private fun checkExactAlarmPermission() {
        if (!TaskAlarmScheduler.hasExactAlarmPermission(this)) {
            TaskAlarmScheduler.promptExactAlarmPermission(this)
        }
    }

    private fun checkBatteryOptimization() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            val packageName = packageName
            val pm = getSystemService(android.content.Context.POWER_SERVICE) as android.os.PowerManager
            if (!pm.isIgnoringBatteryOptimizations(packageName)) {
                try {
                    val intent = Intent().apply {
                        action = android.provider.Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS
                        data = android.net.Uri.parse("package:$packageName")
                    }
                    startActivity(intent)
                } catch (e: Exception) {
                    e.printStackTrace()
                }
            }
        }
    }

    private fun rescheduleAlarmsOnLaunch() {
        lifecycleScope.launch {
            try {
                val db = AppDatabase.getInstance(applicationContext)
                val stats = db.statsDao.getStatsSync() ?: return@launch
                if (stats.isDayStarted && stats.activeDayDate.isNotEmpty()) {
                    val tasks = db.taskDao.getTasksForDateSync(stats.activeDayDate)
                    for (task in tasks) {
                        if (!task.isCompleted && !task.isSkipped) {
                            TaskAlarmScheduler.scheduleAlarm(applicationContext, task)
                        }
                    }
                }
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }
}

data class NavigationBarItemData(
    val route: String,
    val label: String,
    val icon: androidx.compose.ui.graphics.vector.ImageVector
)
