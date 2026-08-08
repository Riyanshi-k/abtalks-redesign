function MissedDay() {
  return (
    <div className="page day-page">

      <section className="day-header">

        <a href="/dashboard" className="back-link">
          ← Dashboard
        </a>

        <div className="day-number">
          YOUR JOURNEY
        </div>

        <h1>
          You missed
          <br />
          a day.
        </h1>

        <p className="subtitle">
          That's okay. One missed day doesn't erase
          everything you've already built.
        </p>

      </section>

      <section className="recovery-card">

        <div className="recovery-icon">
          ↻
        </div>

        <p className="small-text">
          NO RESET REQUIRED
        </p>

        <h2>
          Just keep going.
        </h2>

        <p>
          Your challenge isn't about being perfect for 60 days.
          It's about learning to come back when you fall out
          of rhythm.
        </p>

        <div className="recovery-stats">

          <div>
            <strong>11</strong>
            <span>days completed</span>
          </div>

          <div>
            <strong>1</strong>
            <span>day missed</span>
          </div>

          <div>
            <strong>48</strong>
            <span>days remaining</span>
          </div>

        </div>

        <a
          href="/day/12"
          className="mission-button"
        >
          Continue today's mission
          <span>→</span>
        </a>

      </section>

      <section className="direction-card">

        <span className="direction-icon">✦</span>

        <div>
          <p className="small-text">A BETTER WAY TO THINK ABOUT IT</p>

          <h3>
            Progress isn't a straight line.
          </h3>

          <p>
            Missing one day is information, not failure.
            The important thing is what you do next.
          </p>
        </div>

      </section>

    </div>
  );
}

export default MissedDay;