import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2>About Me</h2>

      <div className="about-card">

        <p>
          I'm <strong>Huzaifa Ramzan</strong>, a passionate Unity Game
          Developer and a Bachelor of Science in Artificial Intelligence (BSAI)
          student at <strong>The University of Lahore</strong>.
        </p>

        <p>
          Alongside my university studies, I'm learning professional
          Game Development from <strong>Cega Lahore</strong>.
        </p>

        <p>
          I enjoy creating immersive 3D games using Unity and C#,
          implementing gameplay mechanics, AI systems, UI, and polished
          player experiences.
        </p>

        <div className="about-info">

          <div>
            <h4>Education</h4>
            <p>BSAI</p>
          </div>

          <div>
            <h4>University</h4>
            <p>The University of Lahore</p>
          </div>

          <div>
            <h4>Graduation</h4>
            <p>2029</p>
          </div>

          <div>
            <h4>Game Development</h4>
            <p>Cega Lahore</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;