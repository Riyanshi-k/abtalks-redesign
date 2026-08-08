# AI Prompts & Development Log

This file documents the AI-assisted prompts and development guidance used while building this project during the hackathon.

The prompts below were used for implementation, debugging, UI refinement, and project documentation.

---

## 1. Project Planning

### Prompt
> Help me plan a 60-day coding challenge web application for a hackathon. The app should allow users to complete daily challenges, track their progress, maintain a streak, and see their journey on a dashboard.

### Purpose
Used to establish the overall product structure, core user flow, and feature requirements.

---

## 2. Challenge Data

### Prompt
> Create challenge data for a 60-day coding challenge. Include the day number, title, description, estimated time, difficulty, and skills for each challenge.

### Purpose
Used to structure the challenge data and create the 60-day challenge system.

---

## 3. Dashboard

### Prompt
> Help me build a React dashboard for a 60-day coding challenge. Show the current day, completed days, remaining days, streak, progress percentage, today's mission, achievements, and a journey progress section.

### Purpose
Used to design and implement the main progress dashboard.

---

## 4. Day Challenge Pages

### Prompt
> Build a reusable React challenge page that dynamically displays the challenge for a specific day using the day number from the URL. It should show the challenge title, description, difficulty, estimated time, skills, requirements, and a completion form.

### Purpose
Used to make the daily challenge pages reusable instead of creating separate pages for every day.

---

## 5. Completion Tracking

### Prompt
> Implement localStorage-based progress tracking for the 60-day challenge. When a user completes a challenge, save that specific day, maintain a list of completed days, and prevent the completed day from being counted multiple times.

### Purpose
Used to implement persistent progress tracking in the browser.

---

## 6. Streak Logic

### Prompt
> Help me calculate the user's current streak from the completed days list. The streak should represent consecutive completed challenge days starting from Day 1.

### Purpose
Used to implement streak calculation and display it on the dashboard.

---

## 7. Missed Day Flow

### Prompt
> Create a missed-day recovery page for a 60-day coding challenge. It should reassure the user that missing one day does not reset their progress and provide a way to continue today's challenge.

### Purpose
Used to design the recovery experience when a user misses a challenge day.

---

## 8. Profile Page

### Prompt
> Create a React profile page for the 60-day builder challenge. Show the user's completed days, current streak, overall progress, GitHub profile, LinkedIn profile, and a section representing their public building journey.

### Purpose
Used to design the profile and public-building section.

---

## 9. Achievements

### Prompt
> Add an achievement system to the dashboard for milestones such as a 7-day streak, 10 completed challenges, and 30 completed challenges. Locked achievements should clearly show the remaining requirement.

### Purpose
Used to implement milestone-based achievements.

---

## 10. Day 60 Completion

### Prompt
> Add a final completion state for Day 60. After completing the final challenge, the dashboard should show that the 60-day journey is complete instead of showing another challenge to start.

### Purpose
Used to implement the final challenge completion state.

---

## 11. Debugging

### Prompt
> Help me debug a React application where multiple pages are rendering blank after changes to routing and challenge data. Check the routing, imports, component rendering, and challenge lookup logic.

### Purpose
Used during debugging of the React pages and routing system.

---

## 12. Responsive Design

### Prompt
> Review the UI for mobile responsiveness and suggest improvements to font sizes, spacing, buttons, cards, and layout without changing the overall visual theme.

### Purpose
Used to improve the mobile experience while keeping the existing visual identity.

---

## 13. Visual Consistency

### Prompt
> Refine the profile cards so they match the visual language of the dashboard. Keep the existing dark green, cream, and gold theme and make buttons and text readable against their backgrounds.

### Purpose
Used for final visual polish and consistency across pages.

---

## 14. Final Testing

### Prompt
> Help me create a final testing checklist for a 60-day challenge React application covering navigation, challenge completion, progress tracking, streaks, missed days, achievements, profile, mobile responsiveness, and Day 60 completion.

### Purpose
Used for final hackathon QA and demo preparation.

---

## Development Notes

- The application uses React and React Router.
- Challenge data is stored in the project's challenge data module.
- Progress is currently persisted using browser `localStorage`.
- Completed challenge days are stored as a list to prevent duplicate counting.
- The application includes separate dashboard, daily challenge, missed-day, profile, and landing experiences.
- The UI uses a dark green, cream, and gold visual theme.
- The application is designed to work across desktop and mobile screen sizes.

---

## AI Usage

AI assistance was used as a development aid for:

- Product planning
- React component development
- Debugging
- LocalStorage progress logic
- UI/UX refinement
- Responsive design suggestions
- Documentation and testing checklists

The final implementation, testing, configuration, and project decisions were reviewed and integrated into the project by the developer.

<!-- Prompt documentation for the ABTALKS challenge project. -->