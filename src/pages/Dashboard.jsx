import "./Dashboard.css";
import { getChallenge } from "../data/challengeData";

function Dashboard() {
  // --------------------------------------------------
  // Get completed days
  // --------------------------------------------------

  let completedDaysList = [];

  try {
    const saved = JSON.parse(
      localStorage.getItem("completedDaysList") || "[]"
    );

    if (Array.isArray(saved)) {
      completedDaysList = saved;
    }
  } catch {
    completedDaysList = [];
  }

  // --------------------------------------------------
  // Migrate old localStorage values
  // --------------------------------------------------

  const day1Completed =
    localStorage.getItem("day1Completed") === "true";

  const day12Completed =
    localStorage.getItem("day12Completed") === "true";

  if (day1Completed && !completedDaysList.includes(1)) {
    completedDaysList.push(1);
  }

  if (day12Completed && !completedDaysList.includes(12)) {
    completedDaysList.push(12);
  }

  completedDaysList = [...new Set(completedDaysList)]
    .map(Number)
    .filter((day) => day >= 1 && day <= 60)
    .sort((a, b) => a - b);

  // Save progress
  localStorage.setItem(
    "completedDaysList",
    JSON.stringify(completedDaysList)
  );

  // --------------------------------------------------
  // Progress calculations
  // --------------------------------------------------

  const completedDays = completedDaysList.length;

  const totalDays = 60;

  const progress = Math.round(
    (completedDays / totalDays) * 100
  );

  // --------------------------------------------------
  // Highest completed day
  // --------------------------------------------------

  const highestCompletedDay =
    completedDaysList.length > 0
      ? Math.max(...completedDaysList)
      : 0;

  // --------------------------------------------------
  // Check if entire challenge is complete
  // --------------------------------------------------

  const challengeComplete =
    completedDays >= totalDays;

  // --------------------------------------------------
  // Find today's challenge
  // --------------------------------------------------

  let currentDay = 1;

  if (!challengeComplete) {
    for (let day = 1; day <= totalDays; day++) {
      if (!completedDaysList.includes(day)) {
        currentDay = day;
        break;
      }
    }
  } else {
    // Keep Day 60 as the final reference
    currentDay = totalDays;
  }

  const remainingDays = Math.max(
    0,
    totalDays - completedDays
  );

  // --------------------------------------------------
  // Streak
  // --------------------------------------------------

  const streak = (() => {
    if (completedDaysList.length === 0) {
      return 0;
    }

    let count = 0;

    for (let day = 1; day <= totalDays; day++) {
      if (completedDaysList.includes(day)) {
        count++;
      } else {
        break;
      }
    }

    return count;
  })();

  // --------------------------------------------------
  // Momentum
  // --------------------------------------------------

  const momentum = Math.min(
    100,
    Math.max(
      0,
      Math.round(progress + streak * 2 + 10)
    )
  );

  // --------------------------------------------------
  // Today's challenge
  // --------------------------------------------------

  const currentChallenge = challengeComplete
    ? null
    : getChallenge(currentDay);

  // --------------------------------------------------
  // Last completed challenge
  // --------------------------------------------------

  const lastCompletedDay =
    highestCompletedDay > 0
      ? getChallenge(highestCompletedDay)
      : null;

  return (
    <div>

      {/* =================================================
          HEADER
      ================================================= */}

      <section className="dashboard-header">

        <div>

          <p className="small-text">
            {challengeComplete
              ? "60 DAYS COMPLETE"
              : `DAY ${currentDay} OF ${totalDays}`}
          </p>

          <h1>
            Good morning,
            <br />
            Abhinav.
          </h1>

        </div>

        <a
          href="/profile"
          className="profile-dot"
        >
          A
        </a>

      </section>


      {/* =================================================
          STREAK
      ================================================= */}

      <section className="streak-card card">

        <div className="streak-main">

          <div>

            <p className="small-text">
              CURRENT STREAK
            </p>

            <div className="streak-number">
              {streak} <span>days</span>
            </div>

            <p className="streak-message">

              {challengeComplete
                ? "60 days complete. You built something that compounds."
                : streak >= 7
                ? "You're building something that compounds."
                : streak > 0
                ? "Keep showing up. Your rhythm is growing."
                : "Your next streak starts with one completed day."}

            </p>

          </div>

          <div className="streak-flame">
            🔥
          </div>

        </div>


        {/* Weekly visual */}

        <div className="streak-days">

          {[1, 2, 3, 4, 5, 6, 7].map(
            (day, index) => {

              const isCompleted =
                completedDaysList.includes(day);

              const isToday =
                !challengeComplete &&
                day === currentDay;

              return (
                <span
                  key={day}
                  className={
                    isCompleted
                      ? "done"
                      : isToday
                      ? "today"
                      : ""
                  }
                >
                  {
                    ["M", "T", "W", "T", "F", "S", "S"][
                      index
                    ]
                  }
                </span>
              );

            }
          )}

        </div>

      </section>


      {/* =================================================
          MOMENTUM
      ================================================= */}

      <section className="momentum-card card">

        <div className="card-heading">

          <div>

            <p className="small-text">
              YOUR MOMENTUM
            </p>

            <h2>

              {challengeComplete
                ? "Legendary."
                : momentum >= 70
                ? "Looking strong."
                : momentum >= 40
                ? "Building nicely."
                : "Just getting started."}

            </h2>

          </div>

          <div className="momentum-score">
            {momentum}
          </div>

        </div>


        <div className="momentum-bar">

          <div
            style={{
              width: `${momentum}%`
            }}
          ></div>

        </div>


        <div className="momentum-insight">

          <span>
            ↑{" "}
            {challengeComplete
              ? "Complete"
              : streak > 0
              ? "Growing"
              : "Start"}
          </span>

          <p>

            {challengeComplete
              ? "You completed the full 60-day journey."
              : streak > 0
              ? "Your consistency is starting to build."
              : "Complete your first mission to build momentum."}

          </p>

        </div>

      </section>


      {/* =================================================
          TODAY'S MISSION / FINAL COMPLETION
      ================================================= */}

      <section className="mission-card card">

        <div className="mission-top">

          <div>

            <p className="small-text">

              {challengeComplete
                ? "60-DAY CHALLENGE"
                : "TODAY'S MISSION"}

            </p>

            <h2>

              {challengeComplete
                ? "Challenge complete."
                : currentChallenge
                ? currentChallenge.title
                : "Challenge complete"}

            </h2>

          </div>


          <span className="time-badge">

            {challengeComplete
              ? "60 / 60"
              : currentChallenge
              ? `~${currentChallenge.estimatedTime}`
              : "Complete"}

          </span>

        </div>


        <p>

          {challengeComplete
            ? "You've completed all 60 challenges. You built the habit, shipped the work, and finished the journey."
            : currentChallenge
            ? currentChallenge.description
            : "You've completed the 60-day challenge. Incredible work."}

        </p>


        {/* Normal challenge */}

        {!challengeComplete && currentChallenge && (
          <>

            <div className="mission-tags">

              {currentChallenge.skills.map(
                (skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                )
              )}

            </div>


            <a
              href={`/day/${currentDay}`}
              className="mission-button"
            >
              Start today's mission
              <span>→</span>
            </a>

          </>
        )}


        {/* Final completion */}

        {challengeComplete && (
          <div className="mission-complete-message">

            <span>
              ✓
            </span>

            <strong>
              60 days. Done.
            </strong>

          </div>
        )}

      </section>


      {/* =================================================
          CHALLENGE PROGRESS
      ================================================= */}

      <section className="progress-card card">

        <div className="card-heading">

          <div>

            <p className="small-text">
              60-DAY JOURNEY
            </p>

            <h2>
              {challengeComplete
                ? "Journey complete."
                : `${completedDays} days in.`}
            </h2>

          </div>

          <strong>
            {progress}%
          </strong>

        </div>


        <div className="progress">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`
            }}
          ></div>

        </div>


        <div className="progress-footer">

          <span>
            {completedDays} completed
          </span>

          <span>
            {remainingDays} remaining
          </span>

        </div>

      </section>


      {/* =================================================
          GROWTH INSIGHT
      ================================================= */}

      <section className="insight-card">

        <div className="insight-icon">
          ✦
        </div>

        <div>

          <p className="small-text">
            A SMALL INSIGHT
          </p>

          <h3>

            {challengeComplete
              ? "You finished what you started."
              : streak >= 7
              ? "You're building real consistency."
              : streak > 0
              ? "Keep the rhythm going."
              : "Start small. Keep showing up."}

          </h3>

          <p>

            {challengeComplete
              ? "60 completed challenges. That's a full journey of showing up and building."
              : completedDays === 0
              ? "Your first completed mission is the beginning of your journey."
              : `You've completed ${completedDays} ${
                  completedDays === 1
                    ? "day"
                    : "days"
                }. Keep the rhythm going.`}

          </p>

        </div>

      </section>


      {/* =================================================
          ACHIEVEMENTS
      ================================================= */}

      <section className="achievements-section">

        <div className="section-title-row">

          <div>

            <p className="small-text">
              YOUR WINS
            </p>

            <h2>
              Achievements
            </h2>

          </div>

          <span className="view-all">
            {completedDays}/60
          </span>

        </div>


        <div className="achievement-grid">


          {/* Week One */}

          <div
            className={
              streak >= 7
                ? "achievement-card"
                : "achievement-card locked"
            }
          >

            <span>
              🔥
            </span>

            <strong>
              Week One
            </strong>

            <small>

              {streak >= 7
                ? "7 day streak unlocked"
                : `${Math.max(
                    0,
                    7 - streak
                  )} days to unlock`}

            </small>

          </div>


          {/* Public Builder */}

          <div
            className={
              completedDays >= 10
                ? "achievement-card"
                : "achievement-card locked"
            }
          >

            <span>
              🚀
            </span>

            <strong>
              Public Builder
            </strong>

            <small>

              {completedDays >= 10
                ? "10 challenges completed"
                : `${Math.max(
                    0,
                    10 - completedDays
                  )} days to unlock`}

            </small>

          </div>


          {/* 30 Day Club */}

          <div
            className={
              completedDays >= 30
                ? "achievement-card"
                : "achievement-card locked"
            }
          >

            <span>
              🏆
            </span>

            <strong>
              30 Day Club
            </strong>

            <small>

              {completedDays >= 30
                ? "30 challenges completed"
                : `${Math.max(
                    0,
                    30 - completedDays
                  )} days to unlock`}

            </small>

          </div>


          {/* 60 Day Legend */}

          <div
            className={
              completedDays >= 60
                ? "achievement-card"
                : "achievement-card locked"
            }
          >

            <span>
              👑
            </span>

            <strong>
              60 Day Legend
            </strong>

            <small>

              {completedDays >= 60
                ? "Challenge completed"
                : `${Math.max(
                    0,
                    60 - completedDays
                  )} days to unlock`}

            </small>

          </div>


        </div>

      </section>


    </div>
  );
}

export default Dashboard;