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

  // --------------------------------------------------
  // Clean completed days
  // --------------------------------------------------

  completedDaysList = [...new Set(completedDaysList)]
    .map(Number)
    .filter((day) => day >= 1 && day <= 60)
    .sort((a, b) => a - b);

  localStorage.setItem(
    "completedDaysList",
    JSON.stringify(completedDaysList)
  );

  // --------------------------------------------------
  // Basic progress values
  // --------------------------------------------------

  const totalDays = 60;

  const completedDays = completedDaysList.length;

  // --------------------------------------------------
  // Check if Day 60 is completed
  // --------------------------------------------------

  const challengeComplete =
    completedDaysList.includes(60);

  // --------------------------------------------------
  // Progress
  //
  // Day 60 is treated as the final completion state
  // even if it was completed directly.
  // --------------------------------------------------

  const progress = challengeComplete
    ? 100
    : Math.round(
        (completedDays / totalDays) * 100
      );

  // --------------------------------------------------
  // Remaining days
  // --------------------------------------------------

  const remainingDays = challengeComplete
    ? 0
    : Math.max(
        0,
        totalDays - completedDays
      );

  // --------------------------------------------------
  // Highest completed day
  // --------------------------------------------------

  const highestCompletedDay =
    completedDaysList.length > 0
      ? Math.max(...completedDaysList)
      : 0;

  // --------------------------------------------------
  // Find next pending challenge
  // --------------------------------------------------

  let nextPendingDay = null;

  for (let day = 1; day <= totalDays; day++) {
    if (!completedDaysList.includes(day)) {
      nextPendingDay = day;
      break;
    }
  }

  // --------------------------------------------------
  // Dashboard reference day
  // --------------------------------------------------

  const currentDay = challengeComplete
    ? totalDays
    : highestCompletedDay > 0
    ? highestCompletedDay
    : 1;

  // --------------------------------------------------
  // Streak
  //
  // A streak only counts consecutive completion
  // starting from Day 1.
  //
  // Example:
  // [1,2,3,12] -> 3 day streak
  // [12]       -> 0 day streak
  // [1..12]    -> 12 day streak
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
  // Display streak
  //
  // If Day 60 is completed, show the final journey
  // as complete even when Day 60 was completed directly.
  // --------------------------------------------------

  const displayStreak = challengeComplete
    ? totalDays
    : streak;

  // --------------------------------------------------
  // Momentum
  // --------------------------------------------------

  const momentum = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        progress + streak * 2 + 10
      )
    )
  );

  // --------------------------------------------------
  // Challenges
  // --------------------------------------------------

  const currentChallenge =
    !challengeComplete && nextPendingDay
      ? getChallenge(nextPendingDay)
      : null;

  const lastCompletedChallenge =
    highestCompletedDay > 0
      ? getChallenge(highestCompletedDay)
      : null;

  return (
    <div className="dashboard-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <section className="dashboard-header">

        <div>

          <p className="small-text">
            {challengeComplete
              ? "60 DAYS COMPLETE"
              : highestCompletedDay > 0
              ? `DAY ${highestCompletedDay} COMPLETED`
              : `DAY 1 OF ${totalDays}`}
          </p>

          <h1>
            Good morning,
            <br />
            Riyanshi.
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
              {displayStreak} <span>days</span>
            </div>

            <p className="streak-message">

              {challengeComplete
                ? "60 days complete. You built something that compounds."
                : streak >= 7
                ? "You're building something that compounds."
                : streak > 0
                ? "Keep showing up. Your rhythm is growing."
                : highestCompletedDay > 0
                ? `Day ${highestCompletedDay} is complete. Build your streak by completing the challenges from Day 1 onward.`
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
                day === nextPendingDay;

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


        <div
  className={`momentum-bar ${
    streak > 0 || challengeComplete
      ? "streak-active"
      : ""
  }`}
>
  <div
    style={{
      width: `${momentum}%`
    }}
  ></div>
</div>


        <div className="momentum-insight">

          <span
  className={
    streak > 0 || challengeComplete
      ? "streak-active-text"
      : ""
  }
>
  {streak > 0 || challengeComplete ? "🔥" : "↑"}{" "}
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
              : highestCompletedDay > 0
              ? `Day ${highestCompletedDay} is recorded. Complete the challenges from Day 1 onward to build your streak.`
              : "Complete your first mission to build momentum."}

          </p>

        </div>

      </section>


      {/* =================================================
          TODAY'S MISSION / COMPLETION
      ================================================= */}

      <section className="mission-card card">

        <div className="mission-top">

          <div>

            <p className="small-text">

              {challengeComplete
                ? "60-DAY CHALLENGE"
                : highestCompletedDay > 0
                ? "LATEST COMPLETION"
                : "TODAY'S MISSION"}

            </p>

            <h2>

              {challengeComplete
                ? "Challenge complete."
                : highestCompletedDay > 0
                ? `Day ${highestCompletedDay} completed.`
                : currentChallenge
                ? currentChallenge.title
                : "Challenge complete"}

            </h2>

          </div>


          <span className="time-badge">

            {challengeComplete
              ? "60 / 60"
              : highestCompletedDay > 0
              ? `Day ${highestCompletedDay}`
              : currentChallenge
              ? `~${currentChallenge.estimatedTime}`
              : "Complete"}

          </span>

        </div>


        <p>

          {challengeComplete
            ? "You've completed all 60 challenges. You built the habit, shipped the work, and finished the journey."

            : highestCompletedDay > 0
            ? nextPendingDay
              ? `Day ${highestCompletedDay} has been recorded successfully. Your next pending challenge is Day ${nextPendingDay}.`
              : "Your completed challenge has been recorded."

            : currentChallenge
            ? currentChallenge.description
            : "You've completed the 60-day challenge. Incredible work."}

        </p>


        {/* Normal challenge */}

        {!challengeComplete &&
          highestCompletedDay === 0 &&
          currentChallenge && (
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


        {/* After completing any challenge */}

        {!challengeComplete &&
          highestCompletedDay > 0 &&
          nextPendingDay && (

            <a
              href={`/day/${nextPendingDay}`}
              className="mission-button"
            >
              Continue to Day {nextPendingDay}
              <span>→</span>
            </a>

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
                : `${completedDays} ${
                    completedDays === 1
                      ? "day"
                      : "days"
                  } in.`}

            </h2>

          </div>

          <strong>
            {progress}%
          </strong>

        </div>


        <div
  className={`progress ${
    challengeComplete
      ? "journey-complete"
      : ""
  }`}
>
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
              : highestCompletedDay > 0
              ? "Every completed challenge counts."
              : "Start small. Keep showing up."}

          </h3>

          <p>

            {challengeComplete
              ? "60 completed challenges. That's a full journey of showing up and building."

              : completedDays === 0
              ? "Your first completed mission is the beginning of your journey."

              : `You've completed ${completedDays} ${
                  completedDays === 1
                    ? "challenge"
                    : "challenges"
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
            {completedDays}/{totalDays}
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
              challengeComplete
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

              {challengeComplete
                ? "Challenge completed"
                : `${Math.max(
                    0,
                    totalDays - completedDays
                  )} days to unlock`}

            </small>

          </div>


        </div>

      </section>


    </div>
  );
}

export default Dashboard;