// =====================================================
// CHALLENGE DATA
// =====================================================

export const student = {
  name: "Abhinav",
  totalDays: 60,
};


// =====================================================
// ALL 60 DAYS
// =====================================================

export const challenges = [
  {
    day: 1,
    title: "Build Your Personal Landing Page",
    description:
      "Create a simple personal landing page that introduces who you are, what you are learning, and what you want to build.",
    estimatedTime: "30 min",
    difficulty: "Beginner",
    skills: ["HTML", "CSS", "Personal Branding"],
  },

  {
    day: 2,
    title: "Build a To-Do App",
    description:
      "Create a simple to-do application where users can add, complete, and remove tasks.",
    estimatedTime: "45 min",
    difficulty: "Beginner",
    skills: ["JavaScript", "DOM", "UI"],
  },

  {
    day: 3,
    title: "Build a Calculator",
    description:
      "Create a functional calculator with a clean and responsive interface.",
    estimatedTime: "45 min",
    difficulty: "Beginner",
    skills: ["JavaScript", "Logic", "CSS"],
  },

  {
    day: 4,
    title: "Build a Digital Clock",
    description:
      "Create a live digital clock that updates automatically.",
    estimatedTime: "30 min",
    difficulty: "Beginner",
    skills: ["JavaScript", "Date", "DOM"],
  },

  {
    day: 5,
    title: "Build a Quote Generator",
    description:
      "Create an interface that displays a random quote whenever the user clicks a button.",
    estimatedTime: "30 min",
    difficulty: "Beginner",
    skills: ["JavaScript", "Arrays", "UI"],
  },

  {
    day: 6,
    title: "Build a Password Generator",
    description:
      "Create a tool that generates secure random passwords.",
    estimatedTime: "45 min",
    difficulty: "Beginner",
    skills: ["JavaScript", "Logic", "Forms"],
  },

  {
    day: 7,
    title: "Build a Quiz App",
    description:
      "Create a multiple-choice quiz that tracks the user's score.",
    estimatedTime: "60 min",
    difficulty: "Beginner",
    skills: ["JavaScript", "State", "UI"],
  },

  {
    day: 8,
    title: "Build a Countdown Timer",
    description:
      "Create a countdown timer for an event or personal goal.",
    estimatedTime: "45 min",
    difficulty: "Beginner",
    skills: ["JavaScript", "Timers", "DOM"],
  },

  {
    day: 9,
    title: "Build a Notes App",
    description:
      "Create a small notes application where users can create and manage notes.",
    estimatedTime: "60 min",
    difficulty: "Intermediate",
    skills: ["JavaScript", "LocalStorage", "UI"],
  },

  {
    day: 10,
    title: "Build a Habit Tracker",
    description:
      "Create a simple interface for tracking daily habits.",
    estimatedTime: "60 min",
    difficulty: "Intermediate",
    skills: ["JavaScript", "State", "UI"],
  },

  {
    day: 11,
    title: "Build a GitHub Profile Card",
    description:
      "Create a profile interface that displays useful developer information.",
    estimatedTime: "45 min",
    difficulty: "Intermediate",
    skills: ["API", "JavaScript", "CSS"],
  },

  {
    day: 12,
    title: "Build a Weather App",
    description:
      "Build a responsive weather application that allows someone to search for a city and see its current weather.",
    estimatedTime: "45 min",
    difficulty: "Intermediate",
    skills: ["API", "Responsive", "Frontend"],
  },
];


// =====================================================
// FALLBACK CHALLENGES FOR DAYS 13–60
// =====================================================

const futureChallengeTitles = [
  "Build a Movie Search App",
  "Build a Recipe Finder",
  "Build a Expense Tracker",
  "Build a Pomodoro Timer",
  "Build a Markdown Previewer",
  "Build a Portfolio Section",
  "Build a Product Card",
  "Build a Search Interface",
  "Build a Form Validator",
  "Build a Responsive Navbar",
  "Build a Music Player",
  "Build a Memory Game",
  "Build a Drawing App",
  "Build a Color Generator",
  "Build a Kanban Board",
  "Build a Chat Interface",
  "Build a Blog Homepage",
  "Build a Pricing Page",
  "Build a Dashboard",
  "Build a Landing Page",
];

for (let day = 13; day <= 60; day++) {
  const title =
    futureChallengeTitles[(day - 13) % futureChallengeTitles.length];

  challenges.push({
    day,
    title,
    description:
      "Turn today's idea into something real. Build it, make it responsive, and share your progress.",
    estimatedTime: "45–60 min",
    difficulty: day < 30 ? "Intermediate" : "Advanced",
    skills: ["JavaScript", "React", "UI Design"],
  });
}


// =====================================================
// HELPER FUNCTIONS
// =====================================================

export function getChallenge(day) {
  return challenges.find((challenge) => challenge.day === Number(day));
}

export function getCompletedDays() {
  return Number(localStorage.getItem("completedDays") || 0);
}

export function getCurrentDay() {
  const completedDays = getCompletedDays();

  return Math.min(completedDays + 1, 60);
}


// =====================================================
// TODAY'S CHALLENGE
// =====================================================

export const todayChallenge = getChallenge(12);