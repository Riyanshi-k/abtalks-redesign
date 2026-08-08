import { useState } from "react";

function Day() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page day-page">

      {/* Header */}
      <section className="day-header">
        <a href="/dashboard" className="back-link">
          ← Dashboard
        </a>

        <div className="day-number">
          DAY 12
        </div>

        <h1>
          Build a
          <br />
          Weather App.
        </h1>

        <p className="subtitle">
          Turn today's idea into something real.
          Then prove you built it.
        </p>
      </section>

      {/* Mission overview */}
      <section className="mission-overview card">

        <div className="mission-meta">
          <span>INTERMEDIATE</span>
          <span>~45 MIN</span>
        </div>

        <h2>Your mission</h2>

        <p>
          Build a responsive weather application that allows
          someone to search for a city and instantly see its
          current weather.
        </p>

        <div className="requirements">

          <div>
            <span>01</span>
            <p>Search for any city</p>
          </div>

          <div>
            <span>02</span>
            <p>Display current weather</p>
          </div>

          <div>
            <span>03</span>
            <p>Make it mobile responsive</p>
          </div>

        </div>

      </section>

      {/* Helpful direction */}
      <section className="direction-card">

        <span className="direction-icon">✦</span>

        <div>
          <p className="small-text">A LITTLE DIRECTION</p>

          <h3>
            Make it yours.
          </h3>

          <p>
            Choose any weather API, design the interface your way,
            and focus on making the experience simple.
          </p>
        </div>

      </section>

      {/* Submission */}
      <section className="submission-section">

        <div className="section-title-row">
          <div>
            <p className="small-text">PROOF OF WORK</p>
            <h2>Show what you built.</h2>
          </div>
        </div>

        {submitted ? (

          <div className="success-card card">

            <div className="success-icon">
              ✓
            </div>

            <p className="small-text">
              DAY 12 COMPLETE
            </p>

            <h2>
              You showed up today.
            </h2>

            <p>
              Your proof of work has been recorded.
              That's another day added to your journey.
            </p>

            <a
              href="/dashboard"
              className="mission-button"
            >
              Back to dashboard
              <span>→</span>
            </a>

          </div>

        ) : (

          <form
            className="submission-form card"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label htmlFor="github">
                GitHub repository
              </label>

              <span>
                Where can we see your code?
              </span>

              <input
                id="github"
                type="url"
                required
                placeholder="https://github.com/you/weather-app"
                className="input-field"
              />

            </div>

            <div className="form-group">

              <label htmlFor="linkedin">
                LinkedIn post
              </label>

              <span>
                Where did you share today's build?
              </span>

              <input
                id="linkedin"
                type="url"
                required
                placeholder="https://linkedin.com/posts/..."
                className="input-field"
              />

            </div>

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

            <button
              type="submit"
              className="mission-button submit-button"
            >
              Submit Day 12
              <span>→</span>
            </button>

          </form>

        )}

      </section>

      {/* Streak reminder */}
      <section className="day-footer-note">

        <span>🔥</span>

        <p>
          <strong>11 days behind you.</strong>
          <br />
          Keep today's promise to yourself.
        </p>

      </section>

    </div>
  );
}

export default Day;