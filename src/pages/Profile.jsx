function Profile() {
  return (
    <div className="page profile-page">

      <section className="profile-hero">
        <a href="/dashboard" className="back-link">
          ← Dashboard
        </a>

        <div className="profile-identity">
          <div className="profile-avatar">
            A
          </div>

          <div>
            <p className="small-text">ABTALKS BUILDER</p>
            <h1>Abhinav</h1>
            <p className="profile-tagline">
              Building in public. One day at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="profile-stats card">

        <div>
          <strong>12</strong>
          <span>DAYS BUILT</span>
        </div>

        <div>
          <strong>11</strong>
          <span>CURRENT STREAK</span>
        </div>

        <div>
          <strong>20%</strong>
          <span>CHALLENGE</span>
        </div>

      </section>

      <section className="profile-section">

        <div className="profile-section-heading">
          <p className="small-text">YOUR PROOF</p>
          <h2>Building in public.</h2>
          <p>
            Your completed challenges will become a visible
            record of what you can actually build.
          </p>
        </div>

        <div className="proof-card card">

          <div className="proof-icon">
            01
          </div>

          <div className="proof-content">
            <span>GITHUB</span>
            <h3>Connect your code</h3>
            <p>
              Your repositories and daily builds will appear here.
            </p>
          </div>

          <button className="profile-action">
            Connect
          </button>

        </div>

        <div className="proof-card card">

          <div className="proof-icon">
            02
          </div>

          <div className="proof-content">
            <span>LINKEDIN</span>
            <h3>Share your progress</h3>
            <p>
              Your public posts will show the journey behind
              the projects.
            </p>
          </div>

          <button className="profile-action">
            Connect
          </button>

        </div>

      </section>

      <section className="profile-empty">

        <div className="empty-mark">
          ✦
        </div>

        <p className="small-text">
          YOUR PORTFOLIO
        </p>

        <h2>
          Your story is still being written.
        </h2>

        <p>
          Complete more challenges and this space will turn
          into a timeline of everything you've built.
        </p>

        <a
          href="/day/12"
          className="mission-button"
        >
          Continue building
          <span>→</span>
        </a>

      </section>

    </div>
  );
}

export default Profile;