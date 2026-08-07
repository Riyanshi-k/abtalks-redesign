function Landing() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="brand">
          <span className="brand-mark">A</span>
          <span>ABTalks</span>
        </div>

        <button className="nav-login">Log in</button>
      </nav>

      <main>
        <section className="hero">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            60 DAYS. ONE BUILD EVERY DAY.
          </div>

          <h1>
            Build in public.
            <br />
            <span>Become impossible to ignore.</span>
          </h1>

          <p className="hero-copy">
            A 60-day coding challenge for Indian college students. Build
            something every day, prove your work, and turn consistency into a
            portfolio recruiters can see.
          </p>

          <button className="primary-button">
            Start your 60-day journey →
          </button>

          <p className="micro-copy">
            No perfection required. Just show up tomorrow.
          </p>
        </section>

        <section className="streak-card">
          <div className="streak-top">
            <div>
              <span className="card-label">YOUR DAILY PROOF</span>
              <h2>One day at a time.</h2>
            </div>

            <div className="flame">🔥</div>
          </div>

          <div className="journey">
            <div className="journey-line"></div>

            <div className="journey-step completed">
              <div className="step-circle">✓</div>
              <span>Build</span>
            </div>

            <div className="journey-step completed">
              <div className="step-circle">✓</div>
              <span>Commit</span>
            </div>

            <div className="journey-step active">
              <div className="step-circle">3</div>
              <span>Share</span>
            </div>
          </div>

          <div className="proof-row">
            <div className="proof-item">
              <span className="proof-icon">GH</span>

              <div>
                <strong>GitHub</strong>
                <span>Show what you built</span>
              </div>
            </div>

            <div className="proof-item">
              <span className="proof-icon">in</span>

              <div>
                <strong>LinkedIn</strong>
                <span>Show that you did it</span>
              </div>
            </div>
          </div>
        </section>

        <section className="why-section">
          <p className="section-kicker">WHY 60 DAYS?</p>

          <h2>
            Consistency is a
            <br />
            <span>competitive advantage.</span>
          </h2>

          <div className="benefit-list">
            <div className="benefit">
              <span>01</span>

              <div>
                <h3>Build real proof</h3>
                <p>
                  Your GitHub tells a story instead of sitting empty.
                </p>
              </div>
            </div>

            <div className="benefit">
              <span>02</span>

              <div>
                <h3>Become visible</h3>
                <p>
                  Share your progress and let opportunities find you.
                </p>
              </div>
            </div>

            <div className="benefit">
              <span>03</span>

              <div>
                <h3>Make showing up a habit</h3>
                <p>
                  Small builds compound into serious progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <span>YOUR NEXT 60 DAYS START HERE.</span>

          <h2>Ready to build?</h2>

          <button className="primary-button">
            Take the challenge →
          </button>
        </section>
      </main>

      <footer>
        <span>ABTalks</span>
        <span>60 days of showing up.</span>
      </footer>
    </div>
  );
}

export default Landing;