function Dashboard() {
  return (
    <div className="page">

      <section>

        <p className="small-text">
          GOOD EVENING 👋
        </p>

        <h1>
          Welcome back,
          <br />
          Abhinav
        </h1>

      </section>

      <section className="card">

        <h2>🔥 27 Day Streak</h2>

        <p className="small-text">
          You're doing better than 92% of learners.
        </p>

      </section>

      <section className="card">

        <p className="small-text">
          MOMENTUM SCORE
        </p>

        <h1 className="green">
          92%
        </h1>

        <div className="progress">

          <div
            className="progress-fill"
            style={{width:"92%"}}
          ></div>

        </div>

        <p className="small-text">

          Excellent consistency.

        </p>

      </section>

      <section className="card">

        <p className="small-text">

          TODAY'S MISSION

        </p>

        <h2>

          Build a Weather App

        </h2>

        <p>

          Create a responsive weather dashboard using any API.

        </p>

        <br />

        <button className="primary-btn">

          Continue →

        </button>

      </section>

      <section className="card">

        <p className="small-text">

          OVERALL PROGRESS

        </p>

        <div className="progress">

          <div
            className="progress-fill"
            style={{width:"45%"}}
          ></div>

        </div>

        <p>

          27 of 60 Days Completed

        </p>

      </section>

      <section className="card">

        <p className="small-text">

          ACHIEVEMENTS

        </p>

        <br />

        <p>🏆 Consistency King</p>

        <p>⭐ Week Warrior</p>

        <p>🚀 Public Builder</p>

      </section>

      <section className="card">

        <p className="small-text">

          LEADERBOARD

        </p>

        <h2>

          #143

        </h2>

        <p>

          Top 8%

        </p>

      </section>

    </div>
  );
}

export default Dashboard;