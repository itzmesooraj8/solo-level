# ⚔️ Solo Leveling: Life System

[![Android Studio](https://img.shields.io/badge/Android%20Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white)](https://developer.android.com/studio)
[![Kotlin](https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white)](https://kotlinlang.org/)
[![Jetpack Compose](https://img.shields.io/badge/Jetpack%20Compose-4285F4?style=for-the-badge&logo=jetpack-compose&logoColor=white)](https://developer.android.com/jetpack/compose)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **"Arise. The System has chosen you to become the Monarch of your own destiny."**

**Solo Leveling: Life System** is a professional-grade productivity and habit-tracking Android application inspired by the world-renowned *Solo Leveling* series. It gamifies the pursuit of self-improvement by transforming real-life tasks into "Quests" that grant Experience Points (XP), allow for Rank advancement (from E-Rank to National Level), and unlock specialized character skills.

---

## 🚀 Core Features

### 🛡️ Character Matrix (Status & Progress)
*   **Dynamic Hunter License:** A personalized profile tracking your Level, Rank, and Titles (e.g., "Shadow Monarch").
*   **Attribute System:** Distribute points into **Strength, Intellect, Vitality, and Sense** based on your habits.
*   **Rank Progression:** Advance through 7 distinct ranks as you hit XP milestones, scaling from E-Rank to the pinnacle of Hunter society.

### ⚔️ Advanced Quest Management
*   **Real-Time Evaluation:** Quests feature active countdown timers based on custom durations.
*   **Weekly Templates:** Automated scheduling for recurring productivity cycles (cloned daily).
*   **Strict Mode Protocols:** High-priority alarms and significant XP penalties for missed tasks.
*   **Dynamic Customization:** Support for custom MP3/WAV audio for quest completions and level-up fanfares.

### 📊 Intelligence & Analytics
*   **Compliance Ratio:** Donut gauges visualizing your success vs. failure rate across all tasks.
*   **XP Trajectory:** Immersive 7-day bar charts tracking growth patterns and daily XP extraction.
*   **System Archive:** A searchable, local history of every quest and habit completed in the last 30 days.

### 🗄️ System Deck (Security & Data)
*   **Monarch-Grade Encryption:** Full database encryption using **SQLCipher (AES-256)**.
*   **Master Gate Access:** Mandatory identity verification via **Biometrics** (Fingerprint/FaceID) or device PIN.
*   **Anti-Leak Protocol:** Toggleable `FLAG_SECURE` mode to block screenshots and screen recordings.
*   **Secure key Management:** Uses Android Keystore and EncryptedSharedPreferences for credential isolation.
*   **Offline First:** Your data never leaves your device. Local JSON/CSV export for manual backups.

---

## 🛠️ Technical Architecture

The application is engineered using modern Android development standards:

*   **UI Framework:** [Jetpack Compose](https://developer.android.com/jetpack/compose) for a fully declarative and reactive interface.
*   **Local Persistence:** [Room](https://developer.android.com/training/data-storage/room) with **SQLCipher** integration for encrypted relational storage.
*   **Security Layer:** [Android Security Crypto](https://developer.android.com/topic/security/data) for encrypted preferences and hardware-backed key management.
*   **Design Pattern:** **MVVM (Model-View-ViewModel)** with clean separation of concerns via refactored logic modules (`BackupManager`, `SecurityManager`).
*   **Task Scheduling:** High-precision `AlarmManager.setAlarmClock()` combined with `WakeLock` for guaranteed notification accuracy.

---

## 📥 Getting Started

### Prerequisites
*   Android Studio Ladybug (or newer)
*   Android SDK 35/36
*   A physical Android device (API 24+)

### Installation
1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/itzmesooraj8/solo-level.git
    ```
2.  **Configuration:**
    *   No external API keys required.
3.  **Build:**
    *   Open the project in Android Studio.
    *   Sync Gradle and click **Run**.

---

## 📜 Usage Protocol

1.  **The Awakening:** Launch the app and authenticate at the System Gate to designate your Hunter Codename.
2.  **Plan the Hunt:** Add your daily habits and one-off quests. Set difficulty levels and durations to initialize the evaluation timers.
3.  **Engage:** The system automatically monitors your progress. Check the dashboard for active countdowns.
4.  **Ascend:** Complete tasks to earn XP. Visit the Status Menu to view your attributes and current Rank.

---

## 🤝 Contributing

Contributions to the System are welcome. Whether it's a bug fix, a new rank idea, or UI polish:
1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<div style="text-align: center;">

**"The System is always watching. Do not falter."**

</div>
