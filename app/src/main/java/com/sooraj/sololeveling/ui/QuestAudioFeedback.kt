package com.sooraj.sololeveling.ui

import android.content.Context
import android.media.AudioManager
import android.media.MediaPlayer
import android.media.ToneGenerator
import android.net.Uri
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

object QuestAudioFeedback {
    private var toneGenerator: ToneGenerator? = null

    init {
        try {
            toneGenerator = ToneGenerator(AudioManager.STREAM_MUSIC, 85)
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    /**
     * Synthetic double-click beep for quest completion
     */
    fun playQuestComplete(context: Context, customUri: String = "") {
        CoroutineScope(Dispatchers.Default).launch {
            if (customUri.isNotEmpty()) {
                try {
                    val mediaPlayer = MediaPlayer.create(context, Uri.parse(customUri))
                    mediaPlayer?.start()
                    mediaPlayer?.setOnCompletionListener { it.release() }
                    return@launch
                } catch (e: Exception) {
                    e.printStackTrace()
                }
            }
            try {
                val tg = toneGenerator ?: ToneGenerator(AudioManager.STREAM_MUSIC, 85)
                tg.startTone(ToneGenerator.TONE_PROP_ACK, 80)
                delay(100)
                tg.startTone(ToneGenerator.TONE_PROP_BEEP2, 100)
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    /**
     * Sweet, rising 3-tone diagnostic chime for LEVEL UP
     */
    fun playLevelUp(context: Context, customUri: String = "") {
        CoroutineScope(Dispatchers.Default).launch {
            if (customUri.isNotEmpty()) {
                try {
                    val mediaPlayer = MediaPlayer.create(context, Uri.parse(customUri))
                    mediaPlayer?.start()
                    mediaPlayer?.setOnCompletionListener { it.release() }
                    return@launch
                } catch (e: Exception) {
                    e.printStackTrace()
                }
            }
            try {
                val tg = toneGenerator ?: ToneGenerator(AudioManager.STREAM_MUSIC, 100)
                // Rising chord tones: Low (DTMF 1), Medium (DTMF 5), High (DTMF 9)
                tg.startTone(ToneGenerator.TONE_DTMF_1, 100)
                delay(120)
                tg.startTone(ToneGenerator.TONE_DTMF_5, 120)
                delay(120)
                tg.startTone(ToneGenerator.TONE_DTMF_9, 250)
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }
}
