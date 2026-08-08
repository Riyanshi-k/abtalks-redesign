import { useState } from "react";
import { useParams } from "react-router-dom";
import { getChallenge } from "../data/challengeData";
import "./Day.css";

function Day() {
  const { dayNumber } = useParams();
  const day = Number(dayNumber);

  const challenge = getChallenge(day);

  // --------------------------------------------------
  // Completion state
  // --------------------------------------------------

  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem(`day${day}Completed`) === "true";
  });

  // --------------------------------------------------
  // Proof of work state
  // --------------------------------------------------

  const [github, setGithub] = useState(() => {
    return localStorage.getItem(`day${day}Github`) || "";
  });

  const [linkedin, setLinkedin] = useState(() => {
    return localStorage.getItem(`day${day}Linkedin`) || "";
  });

  // --------------------------------------------------
  // Submit challenge
  // --------------------------------------------------

  function handleSubmit(event) {
    event.preventDefault();

    // Save proof links
    localStorage.setItem(`day${day}Github`, github);
    localStorage.setItem(`day${day}Linkedin`, linkedin);

    // Mark this specific day as completed
    localStorage.setItem(`day${day}Completed`, "true");

    // Keep completed days list updated
    const existing = JSON.parse(
      localStorage.getItem("completedDaysList") || "[]"
    );

    const updated = [
      ...new Set([...existing, day]),
    ].sort((a, b) => a - b);

    localStorage.setItem(
      "completedDaysList",
      JSON.stringify(updated)
    );

    setSubmitted(true);
  }

  // --------------------------------------------------
  // Invalid challenge
  // --------------------------------------------------

  if (!challenge) {
    return (
      <div>
        <section className="day-header">

          <a href="/dashboard" className="back-link">
            ← Dashboard
          </a>

          <div className="day-number">
            CHALLENGE NOT FOUND
          </div>

          <h1>
            This challenge
            <br />
            doesn't exist.
          </h1>

          <p className="subtitle">
            Please return to your dashboard and continue your journey.
          </p>

          <a
            href="/dashboard"
            className="mission-button"
          >
            Back to dashboard
            <span>→</span>
          </a>

        </section>
      </div>
    );
  }

  // --------------------------------------------------
  // Main page
  // --------------------------------------------------

  return (
    <div>

      {/* Header */}
      <section className="day-header">

        <a href="/dashboard" className="back-link">
          ← Dashboard
        </a>

        <div className="day-number">
          DAY {day}
        </div>

        <h1>
          {challenge.title}
        </h1>

        <p className="subtitle">
          Turn today's idea into something real.
          Then prove you built it.
        </p>

      </section>


      {/* Mission */}
      <section className="mission-overview card">

        <div className="mission-meta">

          <span>
            {challenge.difficulty}
          </span>

          <span>
            ~{challenge.estimatedTime.replace(/^~?/, "")}
          </span>

        </div>

        <h2>
          Your mission
        </h2>

        <p>
          {challenge.description}
        </p>


        {/* Skills */}
        <div className="mission-tags">

          {challenge.skills.map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}

        </div>


        {/* Requirements */}
        <div className="requirements">

          {challenge.requirements ? (

            challenge.requirements.map(
              (requirement, index) => (

                <div key={requirement}>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {requirement}
                  </p>

                </div>

              )
            )

          ) : (

            <>

              <div>
                <span>01</span>
                <p>Build today's challenge</p>
              </div>

              <div>
                <span>02</span>
                <p>Make it responsive</p>
              </div>

              <div>
                <span>03</span>
                <p>Share your progress</p>
              </div>

            </>

          )}

        </div>

      </section>


      {/* Direction */}
      <section className="direction-card">

        <span className="direction-icon">
          ✦
        </span>

        <div>

          <p className="small-text">
            A LITTLE DIRECTION
          </p>

          <h3>
            Make it yours.
          </h3>

          <p>
            Choose your own approach, experiment with the
            design, and focus on turning today's idea into
            something real.
          </p>

        </div>

      </section>


      {/* Submission */}
      <section className="submission-section">

        <div className="section-title-row">

          <div>

            <p className="small-text">
              PROOF OF WORK
            </p>

            <h2>
              Show what you built.
            </h2>

          </div>

        </div>


        {submitted ? (

          /* ------------------------------------------
             Completed state
          ------------------------------------------ */

          <div className="success-card card">

            <div className="success-icon">
              ✓
            </div>

            <p className="small-text">
              DAY {day} COMPLETE
            </p>

            <h2>
              You showed up today.
            </h2>

            <p>
              Your proof of work has been recorded.
              That's another day added to your journey.
            </p>


            {/* Saved proof */}
            <div className="saved-proof">

              <p className="small-text">
                YOUR PROOF
              </p>

              <div className="saved-proof-links">

                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proof-link"
                  >
                    GitHub
                    <span>↗</span>
                  </a>
                )}

                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proof-link"
                  >
                    LinkedIn
                    <span>↗</span>
                  </a>
                )}

              </div>

            </div>


            <a
              href="/dashboard"
              className="mission-button"
            >
              Back to dashboard
              <span>→</span>
            </a>

          </div>

        ) : (

          /* ------------------------------------------
             Submission form
          ------------------------------------------ */

          <form
            className="submission-form card"
            onSubmit={handleSubmit}
          >

            {/* GitHub */}
            <div className="form-group">

              <label htmlFor={`github-${day}`}>
                GitHub repository
              </label>

              <span>
                Where can we see your code?
              </span>

              <input
                id={`github-${day}`}
                type="url"
                required
                value={github}
                onChange={(event) =>
                  setGithub(event.target.value)
                }
                placeholder="https://github.com/you/project"
                className="input-field"
              />

            </div>


            {/* LinkedIn */}
            <div className="form-group">

              <label htmlFor={`linkedin-${day}`}>
                LinkedIn post
              </label>

              <span>
                Where did you share today's build?
              </span>

              <input
                id={`linkedin-${day}`}
                type="url"
                required
                value={linkedin}
                onChange={(event) =>
                  setLinkedin(event.target.value)
                }
                placeholder="https://linkedin.com/posts/..."
                className="input-field"
              />

            </div>


            {/* Confirmation */}
            <label className="proof-check">

              <input
                type="checkbox"
                required
              />

              <span>
                I've completed today's build and shared my
                progress publicly.
              </span>

            </label>


            {/* Submit */}
            <button
              type="submit"
              className="mission-button submit-button"
            >
              Complete Day {day}
              <span>→</span>
            </button>

          </form>

        )}

      </section>


      {/* Footer */}
      <section className="day-footer-note">

        <span>
          🔥
        </span>

        <p>

          <strong>
            Keep showing up.
          </strong>

          <br />

          One day at a time.

        </p>

      </section>

    </div>
  );
}

export default Day;