function DayOne() {
  return (
    <div className="page day-page">

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

      <section className="mission-overview card">

        <div className="mission-meta">
          <span>BEGINNER</span>
          <span>~30 MIN</span>
        </div>

        <h2>Your first mission</h2>

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

      <section className="direction-card">

        <span className="direction-icon">✦</span>

        <div>
          <p className="small-text">REMEMBER</p>

          <h3>
            Day 1 doesn't need to be impressive.
          </h3>

          <p>
            The goal is to start. Your skills, projects and
            confidence will grow throughout the challenge.
          </p>
        </div>

      </section>

      <section className="start-card">

        <div className="start-icon">
          01
        </div>

        <div>
          <p className="small-text">YOUR FIRST STEP</p>

          <h2>
            Ready to build?
          </h2>

          <p>
            Start today's mission and make your first piece
            of proof.
          </p>
        </div>

        <a
          href="/day/12"
          className="mission-button"
        >
          Start building
          <span>→</span>
        </a>

      </section>

    </div>
  );
}

export default DayOne;