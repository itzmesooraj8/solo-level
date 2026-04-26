import { Preferences } from "@capacitor/preferences";
import { db } from "./db";

const SYNC_KEY = "hunter_db_backup";

export async function backupDbToPreferences() {
  try {
    const tasks = await db.tasks.toArray();
    const dayTasks = await db.dayTasks.toArray();
    const dayLogs = await db.dayLogs.toArray();
    const weeklyQuests = await db.weeklyQuests.toArray();
    const player = await db.player.toArray();
    
    const dump = JSON.stringify({
      tasks, dayTasks, dayLogs, weeklyQuests, player
    });
    
    await Preferences.set({ key: SYNC_KEY, value: dump });
  } catch (e) {
    console.error("Backup failed", e);
  }
}

export async function restoreDbFromPreferences() {
  try {
    const { value } = await Preferences.get({ key: SYNC_KEY });
    if (!value) return;
    
    const dump = JSON.parse(value);
    
    // Only restore if Dexie is completely empty (e.g. wiped by OS)
    const count = await db.player.count();
    if (count === 0 && dump.player && dump.player.length > 0) {
      if (dump.tasks?.length) await db.tasks.bulkPut(dump.tasks);
      if (dump.dayTasks?.length) await db.dayTasks.bulkPut(dump.dayTasks);
      if (dump.dayLogs?.length) await db.dayLogs.bulkPut(dump.dayLogs);
      if (dump.weeklyQuests?.length) await db.weeklyQuests.bulkPut(dump.weeklyQuests);
      if (dump.player?.length) await db.player.bulkPut(dump.player);
    }
  } catch (e) {
    console.error("Restore failed", e);
  }
}
