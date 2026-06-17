package com.sooraj.sololeveling.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color

private val DarkColorScheme = darkColorScheme(
    primary = ElectricCyan,
    onPrimary = SpaceBlack,
    secondary = ShadowPurple,
    onSecondary = TextWhite,
    tertiary = HunterGreen,
    background = SpaceBlack,
    onBackground = TextWhite,
    surface = DarkNavy,
    onSurface = TextWhite,
    surfaceVariant = ShadowGrey,
    onSurfaceVariant = TextMuted,
)

@Composable
fun MyApplicationTheme(
    @Suppress("UNUSED_PARAMETER") darkTheme: Boolean = true,
    @Suppress("UNUSED_PARAMETER") dynamicColor: Boolean = false,
    content: @Composable () -> Unit,
) {
    val colorScheme = DarkColorScheme

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}

/**
 * Applies a luxurious glowing background effect at the top of the screen (the "Elegant Dark" aura).
 */
fun Modifier.elegantDarkGlow(): Modifier = this.drawBehind {
    val glowBrush = Brush.radialGradient(
        colors = listOf(
            Color(0x2200F2FF), // ~13% opacity Cyan
            Color.Transparent
        ),
        center = androidx.compose.ui.geometry.Offset(size.width / 2f, -size.height * 0.15f),
        radius = size.width * 1.2f
    )
    drawRect(brush = glowBrush)
}
