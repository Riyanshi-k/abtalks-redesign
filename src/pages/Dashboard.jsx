function Dashboard() {
  return (
    <div className="page dashboard-page">

      {/* Header */}
      <section className="dashboard-header">
        <div>
          <p className="small-text">DAY 12 OF 60</p>
          <h1>
            Good morning,
            <br />
            Abhinav.
          </h1>
        </div>

        <a href="/profile" className="profile-dot"> A</a>
      </section>

      {/* Streak */}
      <section className="streak-card card">
        <div className="streak-main">
          <div>
            <p className="small-text">CURRENT STREAK</p>
            <div className="streak-number">
              11 <span>days</span>
            </div>
            <p className="streak-message">
              You're building something that compounds.
            </p>
          </div>

          <div className="streak-flame">
            🔥
          </div>
        </div>

        <div className="streak-days">
          <span className="done">M</span>
          <span className="done">T</span>
          <span className="done">W</span>
          <span className="done">T</span>
          <span className="done">F</span>
          <span className="today">S</span>
          <span>S</span>
        </div>
      </section>

      {/* Momentum */}
      <section className="momentum-card card">

        <div className="card-heading">
          <div>
            <p className="small-text">YOUR MOMENTUM</p>
            <h2>Looking strong.</h2>
          </div>

          <div className="momentum-score">
            92
          </div>
        </div>

        <div className="momentum-bar">
          <div style={{ width: "92%" }}></div>
        </div>

        <div className="momentum-insight">
          <span>↑ 8%</span>
          <p>
            Your consistency is up compared with last week.
          </p>
        </div>

      </section>

      {/* Today's Mission */}
      <section className="mission-card card">

        <div className="mission-top">
          <div>
            <p className="small-text">TODAY'S MISSION</p>
            <h2>Build a Weather App</h2>
          </div>

          <span className="time-badge">
            ~45 min
          </span>
        </div>

        <p>
          Create a responsive weather dashboard that lets users
          search for a city and view current weather conditions.
        </p>

        <div className="mission-tags">
          <span>API</span>
          <span>Responsive</span>
          <span>Frontend</span>
        </div>

        <a
          href="/day/12"
          className="mission-button"
        >
          Continue mission
          <span>→</span>
        </a>

      </section>

      {/* Challenge Progress */}
      <section className="progress-card card">

        <div className="card-heading">
          <div>
            <p className="small-text">60-DAY JOURNEY</p>
            <h2>12 days in.</h2>
          </div>

          <strong>20%</strong>
        </div>

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: "20%" }}
          ></div>
        </div>

        <div className="progress-footer">
          <span>12 completed</span>
          <span>48 remaining</span>
        </div>

      </section>

      {/* Growth Insight */}
      <section className="insight-card">

        <div className="insight-icon">
          ✦
        </div>

        <div>
          <p className="small-text">A SMALL INSIGHT</p>

          <h3>
            You're past the hardest part.
          </h3>

          <p>
            You've shown up for 11 consecutive days.
            Keep the rhythm going and your next milestone
            is just 9 days away.
          </p>
        </div>

      </section>

      {/* Achievements */}
      <section className="achievements-section">

        <div className="section-title-row">
          <div>
            <p className="small-text">YOUR WINS</p>
            <h2>Achievements</h2>
          </div>

          <span className="view-all">View all</span>
        </div>

        <div className="achievement-grid">

          <div className="achievement-card">
            <span>🔥</span>
            <strong>Week One</strong>
            <small>7 day streak</small>
          </div>

          <div className="achievement-card">
            <span>🚀</span>
            <strong>Public Builder</strong>
            <small>10 posts shared</small>
          </div>

          <div className="achievement-card locked">
            <span>🏆</span>
            <strong>30 Day Club</strong>
            <small>19 days to go</small>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;