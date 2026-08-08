import { useState } from "react";
import "./Day.css";

function DayOne() {
  const [completed, setCompleted] = useState(
    localStorage.getItem("day1Completed") === "true"
  );

  function handleComplete() {
  localStorage.setItem("day1Completed", "true");

  const existing = JSON.parse(
    localStorage.getItem("completedDaysList") || "[]"
  );

  const updated = [
    ...new Set([...existing, 1]),
  ].sort((a, b) => a - b);

  localStorage.setItem(
    "completedDaysList",
    JSON.stringify(updated)
  );

  setCompleted(true);
}

  return (
    <div>

      {/* Header */}
      <section className="day-header">

        <a href="/dashboard" className="back-link">
          ← Dashboard
        </a>

        <div className="day-number">
          DAY 1
        </div>

        <h1>
          Your 60 days
          <br />
          start today.
        </h1>

        <p className="subtitle">
          You don't need a perfect plan.
          You just need to build something and show up.
        </p>

      </section>


      {/* Mission */}
      <section className="mission-overview card">

        <div className="mission-meta">
          <span>BEGINNER</span>
          <span>~30 MIN</span>
        </div>

        <h2>
          Your first mission
        </h2>

        <p>
          Build a simple personal landing page that introduces
          who you are, what you are learning, and what you want
          to build over the next 60 days.
        </p>

        <div className="requirements">

          <div>
            <span>01</span>
            <p>Create your first page</p>
          </div>

          <div>
            <span>02</span>
            <p>Add something you're proud of</p>
          </div>

          <div>
            <span>03</span>
            <p>Publish it and share your progress</p>
          </div>

        </div>

      </section>


      {/* Direction */}
      <section className="direction-card">

        <span className="direction-icon">
          ✦
        </span>

        <div>

          <p className="small-text">
            REMEMBER
          </p>

          <h3>
            Day 1 doesn't need to be impressive.
          </h3>

          <p>
            The goal is to start. Your skills, projects and
            confidence will grow throughout the challenge.
          </p>

        </div>

      </section>


      {/* Completion */}
      {!completed ? (

        <section className="start-card">

          <div className="start-icon">
            01
          </div>

          <div>

            <p className="small-text">
              YOUR FIRST STEP
            </p>

            <h2>
              Ready to build?
            </h2>

            <p>
              Start today's mission and make your first piece
              of proof.
            </p>

          </div>

          <button
            className="mission-button"
            onClick={handleComplete}
          >
            Complete Day 1
            <span>→</span>
          </button>

        </section>

      ) : (

        <section className="success-card card">

          <div className="success-icon">
            ✓
          </div>

          <p className="small-text">
            DAY 1 COMPLETE
          </p>

          <h2>
            You showed up.
          </h2>

          <p>
            Your first day is officially complete.
            Now keep the momentum going.
          </p>

          <a
            href="/dashboard"
            className="mission-button"
          >
            Back to dashboard
            <span>→</span>
          </a>

        </section>

      )}


      {/* Footer */}
      <section className="day-footer-note">

        <span>
          🔥
        </span>

        <p>
          <strong>
            One day behind you.
          </strong>
          <br />
          Keep today's promise to yourself.
        </p>

      </section>

    </div>
  );
}

export default DayOne;