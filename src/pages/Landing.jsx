import "./Landing.css";

function Landing() {
  return (
    <div className="page landing">

      <nav className="navbar">
        <div className="logo">
          <div className="logo-box">A</div>
          <span>ABTalks</span>
        </div>

        <button className="secondary-btn">
          Log in
        </button>
      </nav>

      <section className="hero">

        <p className="eyebrow">
          60 DAYS • BUILD DAILY • STAY CONSISTENT
        </p>

        <h1 className="title">
          Build in public.
          <br />
          <span className="green">
            Become impossible
          </span>
          <br />
          to ignore.
        </h1>

        <p className="subtitle">
          India's most motivating coding challenge.
        </p>

        <button className="primary-btn">
          Start Challenge →
        </button>

      </section>

      <section className="card streak-card">

        <h2>🔥 27 Day Streak</h2>

        <p className="subtitle">
          Keep your momentum alive.
        </p>

      </section>

      <section className="features">

        <div className="card feature">

          <h2>💻</h2>

          <h3>GitHub Proof</h3>

          <p>Daily commits build trust.</p>

        </div>

        <div className="card feature">

          <h2>💼</h2>

          <h3>LinkedIn Visibility</h3>

          <p>Share progress every day.</p>

        </div>

        <div className="card feature">

          <h2>🌱</h2>

          <h3>Grow Daily</h3>

          <p>Small progress compounds.</p>

        </div>

      </section>

      <section className="cta card">

        <h2>Ready?</h2>

        <button className="primary-btn">

          Join Challenge →

        </button>

      </section>

    </div>
  );
}

export default Landing;