package com.sooraj.sololeveling.ui

import java.util.Calendar
import androidx.compose.ui.graphics.Color
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.*
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.sooraj.sololeveling.data.TaskEntity
import com.sooraj.sololeveling.ui.theme.*

@Composable
fun QuestsScreen(
    viewModel: SoloLevelingViewModel,
) {
    val weeklyQuests by viewModel.weeklyQuests.collectAsState()

    var selectedDayOfWeek by remember { mutableIntStateOf(Calendar.getInstance()[Calendar.DAY_OF_WEEK]) }
    var showAddTemplateDialog by remember { mutableStateOf(false) }

    val daysText = listOf("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT")
    
    // Filter templates based on current selected dayOfweek (1 = Sun ... 7 = Sat)
    val filteredTemplates = weeklyQuests.filter { it.dayOfWeek == selectedDayOfWeek }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(SpaceBlack)
            .elegantDarkGlow()
            .padding(16.dp),
    ) {
        Column(modifier = Modifier.fillMaxSize()) {
            Spacer(modifier = Modifier.height(24.dp))
            
            Text(
                text = "🛡️ SYSTEM WEEKLY PLANNER",
                color = ElectricCyan,
                fontSize = 12.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Monospace
            )
            Text(
                text = "Shadow Auto-Quests",
                color = TextWhite,
                fontSize = 20.sp,
                fontWeight = FontWeight.ExtraBold
            )
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = "Define tasks assigned to each day of the week. When you click 'START HUNT' on the dashboard, the system will automatically cloned and initialize these quests for you.",
                color = TextMuted,
                fontSize = 11.sp,
                lineHeight = 15.sp
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Horizontally aligned day selectors
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(12.dp))
                    .background(DarkNavy.copy(alpha = 0.6f))
                    .padding(4.dp),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                daysText.forEachIndexed { index, name ->
                    val dayNum = index + 1
                    val isSelected = dayNum == selectedDayOfWeek

                    Box(
                        modifier = Modifier
                            .weight(1f)
                            .aspectRatio(0.9f)
                            .clip(RoundedCornerShape(8.dp))
                            .background(if (isSelected) ShadowPurple else Color.Transparent)
                            .clickable { selectedDayOfWeek = dayNum }
                            .border(
                                1.dp,
                                if (isSelected) ElectricCyan else Color.Transparent,
                                RoundedCornerShape(8.dp)
                            ),
                        contentAlignment = Alignment.Center
                    ) {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(
                                text = name,
                                color = if (isSelected) TextWhite else TextMuted,
                                fontSize = 11.sp,
                                fontWeight = FontWeight.Bold,
                                fontFamily = FontFamily.Monospace
                            )
                            
                            // Indicator if day has templates configured
                            val count = weeklyQuests.count { it.dayOfWeek == dayNum }
                            if (count > 0) {
                                Box(
                                    modifier = Modifier
                                        .padding(top = 4.dp)
                                        .size(4.dp)
                                        .background(ElectricCyan, RoundedCornerShape(4.dp))
                                )
                            }
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(20.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "Templates for ${daysText[selectedDayOfWeek - 1]}DAY",
                    color = TextWhite,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Bold,
                    fontFamily = FontFamily.Monospace
                )

                Button(
                    onClick = { showAddTemplateDialog = true },
                    colors = ButtonDefaults.buttonColors(containerColor = ShadowPurple),
                    shape = RoundedCornerShape(8.dp),
                    contentPadding = PaddingValues(horizontal = 12.dp, vertical = 2.dp),
                    modifier = Modifier.height(28.dp)
                ) {
                    Text(
                        "ADD TEMPLATE",
                        fontSize = 10.sp,
                        fontWeight = FontWeight.Bold,
                        color = TextWhite,
                        fontFamily = FontFamily.Monospace
                    )
                }
            }

            Spacer(modifier = Modifier.height(10.dp))

            // Template Content List
            if (filteredTemplates.isEmpty()) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .weight(1f),
                    contentAlignment = Alignment.Center
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.EventNote,
                            contentDescription = "Empty Day",
                            tint = TextMuted,
                            modifier = Modifier.size(48.dp)
                        )
                        Spacer(modifier = Modifier.height(8.dp))
                        Text(
                            text = "NO TEMPLATE QUESTS FOR THIS DAY",
                            color = TextMuted,
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.Monospace
                        )
                    }
                }
            } else {
                LazyColumn(
                    modifier = Modifier
                        .fillMaxWidth()
                        .weight(1f),
                    verticalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    items(filteredTemplates) { template ->
                        TemplateItemCard(template = template) {
                            viewModel.deleteTask(template)
                        }
                    }
                }
            }
        }

        if (showAddTemplateDialog) {
            AddTaskDialog(onDismiss = { showAddTemplateDialog = false }) { title, time, duration, difficulty, mode, customPrompt, _ ->
                viewModel.insertTask(
                    title = title,
                    time = time,
                    duration = duration,
                    difficulty = difficulty,
                    mode = mode,
                    customPrompt = customPrompt,
                    dayOfWeek = selectedDayOfWeek
                )
                showAddTemplateDialog = false
            }
        }
    }
}

@Composable
fun TemplateItemCard(
    template: TaskEntity,
    onDelete: () -> Unit
) {
    val rankBadge = when (template.difficulty) {
        "Hard" -> "S-RANK"
        "Medium" -> "A-RANK"
        else -> "B-RANK"
    }

    val rankColor = when (template.difficulty) {
        "Hard" -> HunterRed
        "Medium" -> HunterYellow
        else -> HunterGreen
    }

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(DarkNavy.copy(alpha = 0.6f))
            .border(1.dp, ShadowGrey, RoundedCornerShape(16.dp))
            .padding(12.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column(modifier = Modifier.weight(1f)) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(
                        text = template.time,
                        color = ElectricCyan,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = rankBadge,
                        color = rankColor,
                        fontSize = 9.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Monospace,
                        modifier = Modifier
                            .border(1.dp, rankColor.copy(alpha = 0.5f), RoundedCornerShape(2.dp))
                            .padding(horizontal = 4.dp, vertical = 1.dp)
                    )
                }

                Spacer(modifier = Modifier.height(4.dp))

                Text(
                    text = template.title,
                    color = TextWhite,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Bold
                )

                if (template.customPrompt.isNotEmpty()) {
                    Text(
                        text = "Query: ${template.customPrompt}",
                        color = TextMuted,
                        fontSize = 11.sp
                    )
                }
            }

            IconButton(onClick = onDelete, modifier = Modifier.size(32.dp)) {
                Icon(
                    imageVector = Icons.Default.Delete,
                    contentDescription = "Delete",
                    tint = HunterRed.copy(alpha = 0.8f),
                    modifier = Modifier.size(18.dp)
                )
            }
        }
    }
}
