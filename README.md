# ABTALKS — 60 Day Builder Challenge

> Build something every day. Show your work. Build your consistency.

ABTALKS is a 60-day coding challenge platform designed to help students and developers build consistently by completing one practical challenge each day.

Instead of only learning through tutorials, users get a daily challenge, build something, track their progress, maintain a streak, and see their journey grow over time.

---

## 🚀 What is ABTALKS?

ABTALKS turns learning into a daily building habit.

The platform provides:

- Daily coding challenges
- Progress tracking
- Streak tracking
- Achievement milestones
- Missed-day recovery
- Public-building profile
- GitHub and LinkedIn profile connections
- A final 60-day completion state

The goal is simple:

**Don't just learn. Build something and show up consistently.**

---

## ✨ Key Features

### 🗓️ 60-Day Challenge

Users can work through a structured 60-day coding journey.

Each challenge includes:

- Day number
- Challenge title
- Description
- Estimated time
- Difficulty
- Skills
- Challenge requirements

---

### 📊 Progress Dashboard

The dashboard gives users a quick overview of their journey.

It displays:

- Current challenge
- Completed days
- Remaining days
- Overall progress percentage
- Current streak
- Momentum score
- Achievements
- Journey progress

---

### 🔥 Streak Tracking

Completed challenges are tracked to calculate the user's current streak.

The dashboard communicates the user's consistency and encourages them to keep building.

---

### 🏆 Achievements

Users can unlock milestones based on their progress.

Current achievements include:

- 🔥 Week One — 7 day streak
- 🚀 Public Builder — 10 challenges completed
- 🏆 30 Day Club — 30 challenges completed
- 👑 60 Day Legend — complete the full challenge

Locked achievements show the progress required to unlock them.

---

### ✅ Challenge Completion

Each challenge has a completion flow where users can provide:

- GitHub repository
- LinkedIn post
- Completion confirmation

After submission, the challenge is recorded as completed.

---

### 🧭 Missed-Day Recovery

Missing a challenge does not destroy the user's entire journey.

The application provides a dedicated missed-day experience that allows the user to continue their challenge.

---

### 👤 Builder Profile

The profile page shows:

- Days built
- Current streak
- Overall challenge progress
- GitHub profile
- LinkedIn profile
- Public-building journey

Users can connect their GitHub and LinkedIn profiles through the profile section.

---

### 🏁 60-Day Completion

After completing all 60 challenges, the dashboard changes into a final completion state showing that the 60-day journey has been completed.

---

## 🎨 Design

The interface uses a focused visual identity built around:

- Deep green
- Cream / off-white
- Gold accents
- Rounded cards
- Clear typography
- Responsive layouts

The design is intentionally minimal so that progress, challenges, and actions remain easy to understand.

---

## 🛠️ Tech Stack

- React
- JavaScript
- React Router
- CSS
- Browser LocalStorage
- Vite

---

## 📁 Project Structure

```text
abtalks/
│
├── public/
│
├── src/
│   ├── data/
│   │   └── challengeData.js
│   │
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Day.jsx
│   │   ├── DayOne.jsx
│   │   ├── MissedDay.jsx
│   │   └── Profile.jsx
│   │
│   ├── App.jsx
│   └── ...
│
├── README.md
├── PROMPTS.md
├── package.json
└── ...