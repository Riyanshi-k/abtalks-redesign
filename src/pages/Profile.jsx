import { useState } from "react";
import "./Profile.css";

function Profile() {
  // --------------------------------------------------
  // Completed days
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

  completedDaysList = [...new Set(completedDaysList)]
    .map(Number)
    .filter((day) => day >= 1 && day <= 60)
    .sort((a, b) => a - b);

  const completedDays = completedDaysList.length;
  const totalDays = 60;

  // --------------------------------------------------
  // Progress
  // --------------------------------------------------

  const progress = Math.round(
    (completedDays / totalDays) * 100
  );

  // --------------------------------------------------
  // Current streak
  // --------------------------------------------------

  let streak = 0;

  for (let day = 1; day <= totalDays; day++) {
    if (completedDaysList.includes(day)) {
      streak++;
    } else {
      break;
    }
  }

  // --------------------------------------------------
  // Next incomplete day
  // --------------------------------------------------

  let currentDay = 1;

  for (let day = 1; day <= totalDays; day++) {
    if (!completedDaysList.includes(day)) {
      currentDay = day;
      break;
    }
  }

  if (completedDays >= totalDays) {
    currentDay = totalDays;
  }

  // --------------------------------------------------
  // GitHub / LinkedIn
  // --------------------------------------------------

  const [github, setGithub] = useState(
    localStorage.getItem("githubProfile") || ""
  );

  const [linkedin, setLinkedin] = useState(
    localStorage.getItem("linkedinProfile") || ""
  );

  const [editingGithub, setEditingGithub] =
    useState(false);

  const [editingLinkedin, setEditingLinkedin] =
    useState(false);

  function saveGithub() {
    localStorage.setItem("githubProfile", github);
    setEditingGithub(false);
  }

  function saveLinkedin() {
    localStorage.setItem("linkedinProfile", linkedin);
    setEditingLinkedin(false);
  }

  return (
    <div>

      {/* Hero */}
      <section className="profile-hero">

        <a href="/dashboard" className="back-link">
          ← Dashboard
        </a>

        <div className="profile-identity">

          <div className="profile-avatar">
            A
          </div>

          <div>

            <p className="small-text">
              ABTALKS BUILDER
            </p>

            <h1>
              Riyanshi
            </h1>

            <p className="profile-tagline">
              Building in public. One day at a time.
            </p>

          </div>

        </div>

      </section>


      {/* Stats */}
      <section className="profile-stats card">

        <div>
          <strong>
            {completedDays}
          </strong>

          <span>
            DAYS BUILT
          </span>
        </div>

        <div>
          <strong>
            {streak}
          </strong>

          <span>
            CURRENT STREAK
          </span>
        </div>

        <div>
          <strong>
            {progress}%
          </strong>

          <span>
            CHALLENGE
          </span>
        </div>

      </section>


      {/* Proof */}
      <section className="profile-section">

        <div className="profile-section-heading">

          <p className="small-text">
            YOUR PROOF
          </p>

          <h2>
            Building in public.
          </h2>

          <p>
            Connect your profiles so your progress can
            live alongside the work you're building.
          </p>

        </div>


        {/* GitHub */}
        <div className="proof-card card">

          <div className="proof-icon">
            01
          </div>

          <div className="proof-content">

            <span>
              GITHUB
            </span>

            <h3>
              {github
                ? "GitHub connected"
                : "Connect your code"}
            </h3>

            <p>
              {github
                ? github
                : "Add your GitHub profile to show your code and projects."}
            </p>

            {editingGithub && (
              <input
                type="url"
                value={github}
                onChange={(event) =>
                  setGithub(event.target.value)
                }
                placeholder="https://github.com/username"
                className="profile-connect-input"
              />
            )}

          </div>


          {!editingGithub ? (

            <button
              className="profile-action"
              onClick={() =>
                setEditingGithub(true)
              }
            >
              {github ? "Edit" : "Connect"}
            </button>

          ) : (

            <button
              className="profile-action"
              onClick={saveGithub}
            >
              Save
            </button>

          )}

        </div>


        {/* LinkedIn */}
        <div className="proof-card card">

          <div className="proof-icon">
            02
          </div>

          <div className="proof-content">

            <span>
              LINKEDIN
            </span>

            <h3>
              {linkedin
                ? "LinkedIn connected"
                : "Share your progress"}
            </h3>

            <p>
              {linkedin
                ? linkedin
                : "Add your LinkedIn profile to share your journey."}
            </p>

            {editingLinkedin && (
              <input
                type="url"
                value={linkedin}
                onChange={(event) =>
                  setLinkedin(event.target.value)
                }
                placeholder="https://linkedin.com/in/username"
                className="profile-connect-input"
              />
            )}

          </div>


          {!editingLinkedin ? (

            <button
              className="profile-action"
              onClick={() =>
                setEditingLinkedin(true)
              }
            >
              {linkedin ? "Edit" : "Connect"}
            </button>

          ) : (

            <button
              className="profile-action"
              onClick={saveLinkedin}
            >
              Save
            </button>

          )}

        </div>

      </section>


      {/* Portfolio */}
      <section className="profile-empty">

        <div className="empty-mark">
          ✦
        </div>

        <p className="small-text">
          YOUR PORTFOLIO
        </p>

        <h2>
          {completedDays === 0
            ? "Your story starts here."
            : "Your story is being written."}
        </h2>

        <p>
          {completedDays === 0
            ? "Complete your first challenge and start building your public record."
            : `You've completed ${completedDays} ${
                completedDays === 1
                  ? "day"
                  : "days"
              }. Keep building and this space will grow with you.`}
        </p>

        <a
          href={`/day/${currentDay}`}
          className="mission-button"
        >
          {completedDays >= totalDays
            ? "Back to dashboard"
            : `Continue Day ${currentDay}`}

          <span>
            →
          </span>
        </a>

      </section>

    </div>
  );
}

export default Profile;