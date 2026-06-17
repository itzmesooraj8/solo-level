package com.sooraj.sololeveling.ui

import androidx.compose.ui.graphics.Color
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ChevronLeft
import androidx.compose.material.icons.filled.ChevronRight
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Warning
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.sooraj.sololeveling.data.DayHistoryEntity
import com.sooraj.sololeveling.ui.theme.*
import java.text.SimpleDateFormat
import java.util.*

@Composable
fun CalendarScreen(
    viewModel: SoloLevelingViewModel,
) {
    val history by viewModel.historyState.collectAsState()

    // Determine calendar setup (Currently viewing month)
    var focusedMonthCalendar by remember { mutableStateOf(Calendar.getInstance()) }

    val monthFormatter = SimpleDateFormat("MMMM yyyy", Locale.getDefault())
    val monthTitle = monthFormatter.format(focusedMonthCalendar.time)

    // Calculate details for creating grid
    val daysInMonth = focusedMonthCalendar.getActualMaximum(Calendar.DAY_OF_MONTH)
    
    // Day of week of 1st day (1 = Sunday ... 7 = Saturday)
    val startCalendar = (focusedMonthCalendar.clone() as Calendar).apply {
        set(Calendar.DAY_OF_MONTH, 1)
    }
    val startDayOfWeek = startCalendar[Calendar.DAY_OF_WEEK] - 1 // 0 to 6

    // Generate list of items to display in grid (total 42 to make a nice aligned grid)
    val gridItems = remember(daysInMonth, startDayOfWeek, focusedMonthCalendar.timeInMillis) {
        val list = mutableListOf<CalendarDayInfo?>()
        // Prefill empty blocks
        repeat(startDayOfWeek) {
            list.add(null)
        }
        // Populate actual days
        val monthYearFormat = SimpleDateFormat("yyyy-MM-", Locale.getDefault())
        val monthYearPrefix = monthYearFormat.format(focusedMonthCalendar.time)

        for (day in 1..daysInMonth) {
            val dateStr = String.format(Locale.getDefault(), "%s%02d", monthYearPrefix, day)
            list.add(CalendarDayInfo(dayNum = day, dateString = dateStr))
        }

        // Fill trailing items to reach grid grid size
        while (list.size < 35) {
            list.add(null)
        }
        if (list.size in 36..41) {
            while (list.size < 42) {
                list.add(null)
            }
        }
        list
    }

    // Currently clicked calendar day details
    val todayDateStr = viewModel.getFormattedToday()
    val preSelectedDay = gridItems.asSequence().filterNotNull().find { it.dateString == todayDateStr } ?: gridItems.asSequence().filterNotNull().firstOrNull()
    var selectedDayInfo by remember { mutableStateOf(preSelectedDay) }

    // Look up associated history data if any
    val dayRecord = selectedDayInfo?.let { day ->
        history.find { it.dateString == day.dateString }
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(SpaceBlack)
            .elegantDarkGlow()
            .padding(16.dp)
    ) {
        Column(modifier = Modifier.fillMaxSize()) {
            Spacer(modifier = Modifier.height(24.dp))

            Text(
                text = "📊 CHRONO-PORTAL RECORDS",
                color = ElectricCyan,
                fontSize = 12.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Monospace
            )
            Text(
                text = "Campaign Portal History",
                color = TextWhite,
                fontSize = 20.sp,
                fontWeight = FontWeight.ExtraBold
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Month Select Control bar
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(12.dp))
                    .background(DarkNavy)
                    .border(1.dp, ShadowGrey, RoundedCornerShape(12.dp))
                    .padding(8.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Box(
                    modifier = Modifier
                        .size(32.dp)
                        .clip(RoundedCornerShape(8.dp))
                        .clickable {
                            val newCal = focusedMonthCalendar.clone() as Calendar
                            newCal.add(Calendar.MONTH, -1)
                            focusedMonthCalendar = newCal
                        },
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = Icons.Default.ChevronLeft,
                        contentDescription = "Previous",
                        tint = ElectricCyan
                    )
                }

                Text(
                    text = monthTitle.uppercase(),
                    color = TextWhite,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Bold,
                    fontFamily = FontFamily.Monospace
                )

                Box(
                    modifier = Modifier
                        .size(32.dp)
                        .clip(RoundedCornerShape(8.dp))
                        .clickable {
                            val newCal = focusedMonthCalendar.clone() as Calendar
                            newCal.add(Calendar.MONTH, 1)
                            focusedMonthCalendar = newCal
                        },
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = Icons.Default.ChevronRight,
                        contentDescription = "Next",
                        tint = ElectricCyan
                    )
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Weekday labels
            Row(modifier = Modifier.fillMaxWidth()) {
                val weekDays = listOf("SU", "MO", "TU", "WE", "TH", "FR", "SA")
                weekDays.forEach { name ->
                    Box(
                        modifier = Modifier.weight(1f),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = name,
                            color = TextMuted,
                            fontSize = 10.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.Monospace
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(8.dp))

            // Calendar Grid View mapping history colors
            LazyVerticalGrid(
                columns = GridCells.Fixed(7),
                modifier = Modifier
                    .fillMaxWidth()
                    .wrapContentHeight()
                    .border(1.dp, ShadowGrey, RoundedCornerShape(16.dp))
                    .background(DarkNavy, RoundedCornerShape(16.dp))
                    .padding(8.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(gridItems) { day ->
                    if (day == null) {
                        Box(modifier = Modifier.aspectRatio(1f)) // Invisible spacing cell
                    } else {
                        val record = history.find { it.dateString == day.dateString }
                        val statusBorderColor = when (record?.status) {
                            "PERFECT" -> HunterGreen
                            "PARTIAL" -> HunterYellow
                            "FAILED" -> HunterRed
                            else -> ShadowGrey
                        }

                        val isToday = day.dateString == todayDateStr
                        val isSelected = selectedDayInfo?.dateString == day.dateString

                        Box(
                            modifier = Modifier
                                .aspectRatio(1f)
                                .clip(RoundedCornerShape(6.dp))
                                .background(
                                    if (isSelected) ShadowPurple.copy(alpha = 0.4f)
                                    else if (isToday) ShadowGrey
                                    else Color.Transparent
                                )
                                .border(
                                    if (isSelected) 2.dp else 1.dp,
                                    if (isSelected) ElectricCyan else statusBorderColor,
                                    RoundedCornerShape(6.dp)
                                )
                                .clickable { selectedDayInfo = day }
                                .padding(4.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                Text(
                                    text = day.dayNum.toString(),
                                    color = if (isToday) ElectricCyan else TextWhite,
                                    fontSize = 13.sp,
                                    fontWeight = if (isToday || isSelected) FontWeight.Bold else FontWeight.Medium,
                                    fontFamily = FontFamily.Monospace
                                )

                                // Micro status dash bullet
                                if (record != null) {
                                    val indicatorColor = when (record.status) {
                                        "PERFECT" -> HunterGreen
                                        "PARTIAL" -> HunterYellow
                                        else -> HunterRed
                                    }
                                    Box(
                                        modifier = Modifier
                                            .padding(top = 2.dp)
                                            .size(4.dp)
                                            .clip(RoundedCornerShape(4.dp))
                                            .background(indicatorColor)
                                    )
                                }
                            }
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // History Detail Panel drawer
            selectedDayInfo?.let { day ->
                DayDetailPanel(dayInfo = day, record = dayRecord)
            }
        }
    }
}

@Composable
fun DayDetailPanel(
    dayInfo: CalendarDayInfo,
    record: DayHistoryEntity?
) {
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
                text = "DATE LOG: ${dayInfo.dateString}",
                color = TextMuted,
                fontSize = 11.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Monospace
            )

            Spacer(modifier = Modifier.height(8.dp))

            if (record != null) {
                val statusText: String
                val statusColor: Color
                val description: String

                when (record.status) {
                    "PERFECT" -> {
                        statusText = "CLEARED - PERFECT"
                        statusColor = HunterGreen
                        description = "Outstanding! Completed all scheduled quests with zero casualties (misses). Elite rank achievements expanded."
                    }
                    "PARTIAL" -> {
                        statusText = "CLEARED - PARTIAL"
                        statusColor = HunterYellow
                        description = "Quest survived. One warning registered. Missed exactly 1 challenge. Keep focus intact tomorrow."
                    }
                    else -> {
                        statusText = "FAILED PORTAL"
                        statusColor = HunterRed
                        description = "Hunter status collapsed. Missed 2+ challenges today resulting in a direct system penalty and streak collapse."
                    }
                }

                Row(verticalAlignment = Alignment.CenterVertically) {
                    Box(
                        modifier = Modifier
                            .size(10.dp)
                            .background(statusColor, RoundedCornerShape(10.dp))
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    Text(
                        text = statusText,
                        color = statusColor,
                        fontSize = 14.sp,
                        fontWeight = FontWeight.ExtraBold,
                        fontFamily = FontFamily.Monospace
                    )
                }

                Spacer(modifier = Modifier.height(8.dp))

                Text(
                    text = description,
                    color = TextWhite,
                    fontSize = 12.sp,
                    lineHeight = 16.sp
                )

                Spacer(modifier = Modifier.height(14.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Column {
                        Text("SUCCESSFUL", color = TextMuted, fontSize = 10.sp, fontFamily = FontFamily.Monospace)
                        Text("${record.tasksCompleted} Quests", color = HunterGreen, fontSize = 15.sp, fontWeight = FontWeight.Bold)
                    }

                    Column {
                        Text("MISSED", color = TextMuted, fontSize = 10.sp, fontFamily = FontFamily.Monospace)
                        Text("${record.tasksMissed} Quests", color = HunterRed, fontSize = 15.sp, fontWeight = FontWeight.Bold)
                    }

                    Column(horizontalAlignment = Alignment.End) {
                        Text("TOTAL EXTRACTED", color = TextMuted, fontSize = 10.sp, fontFamily = FontFamily.Monospace)
                        Text("+${record.xpEarned} XP", color = LuminousCyan, fontSize = 15.sp, fontWeight = FontWeight.Bold)
                    }
                }
            } else {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.padding(vertical = 12.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.Info,
                        contentDescription = "Lock",
                        tint = TextMuted,
                        modifier = Modifier.size(24.dp)
                    )
                    Spacer(modifier = Modifier.width(12.dp))
                    Column {
                        Text(
                            text = "QUEST REGISTER INACTIVE",
                            color = TextWhite,
                            fontSize = 13.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.Monospace
                        )
                        Text(
                            text = "No history record has been locked for this chrono portal. Complete your hunt daily to save log history.",
                            color = TextMuted,
                            fontSize = 11.sp
                        )
                    }
                }
            }
        }
    }
}

data class CalendarDayInfo(
    val dayNum: Int,
    val dateString: String
)
