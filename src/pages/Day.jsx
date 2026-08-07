function Day() {
  return (
    <div className="page">

      <section>
        <p className="small-text">DAY 12</p>

        <h1>
          Build a
          <br />
          Weather App 🌦️
        </h1>

        <p className="subtitle">
          Today's mission is to build a responsive weather application
          using any public weather API.
        </p>
      </section>

      <section className="card">

        <p className="small-text">
          REQUIREMENTS
        </p>

        <br />

        <p>✅ Search any city</p>
        <p>✅ Show temperature</p>
        <p>✅ Weather icon</p>
        <p>✅ Mobile responsive</p>

      </section>

      <section className="card">

        <p className="small-text">
          GITHUB REPOSITORY
        </p>

        <input
          type="text"
          placeholder="https://github.com/..."
          className="input-field"
        />

        <br />
        <br />

        <p className="small-text">
          LINKEDIN POST
        </p>

        <input
          type="text"
          placeholder="https://linkedin.com/..."
          className="input-field"
        />

        <br />
        <br />

        <label className="checkbox">

          <input type="checkbox" />

          <span>
            I tested my project before submitting.
          </span>

        </label>

        <br />

        <button className="primary-btn">

          Submit Today's Build →

        </button>

      </section>

      <section className="card">

        <h2>🔥 Keep the streak alive!</h2>

        <p className="subtitle">
          You've already completed 11 days.
          Future you will thank today's you.
        </p>

      </section>

    </div>
  );
}

export default Day;