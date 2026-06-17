# General Obfuscation
-repackageclasses ''
-allowaccessmodification
-dontusemixedcaseclassnames
-dontskipnonpubliclibraryclasses
-verbose

# Room ProGuard rules
-keep class * extends androidx.room.RoomDatabase
-dontwarn androidx.room.paging.**
-keep class com.sooraj.sololeveling.data.** { *; }

# Moshi ProGuard rules
-keep class com.squareup.moshi.** { *; }
-keepclassmembers class com.squareup.moshi.** { *; }
-keep class **JsonAdapter { *; }
-keepclassmembers class **JsonAdapter { *; }

# Keep data classes used by Room
-keep class com.sooraj.sololeveling.data.TaskEntity { *; }
-keep class com.sooraj.sololeveling.data.StatsEntity { *; }
-keep class com.sooraj.sololeveling.data.DayHistoryEntity { *; }
-keep class com.sooraj.sololeveling.data.HabitEntity { *; }
-keep class com.sooraj.sololeveling.data.RewardEntity { *; }
-keep class com.sooraj.sololeveling.data.QuestHistoryEntity { *; }

# Coroutines
-keepnames class kotlinx.coroutines.internal.MainDispatcherFactory {}
-keepnames class kotlinx.coroutines.CoroutineExceptionHandler {}
-keepclassmembers class kotlinx.coroutines.** {
    volatile <fields>;
}

# Compose
-dontwarn androidx.compose.**

# Keep BroadcastReceivers
-keep class com.sooraj.sololeveling.receiver.BootReceiver { *; }
-keep class com.sooraj.sololeveling.receiver.TaskAlarmReceiver { *; }
-keep class com.sooraj.sololeveling.receiver.TaskActionReceiver { *; }
