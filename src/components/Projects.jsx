import "./Projects.css";
import ZombieGame from "../assets/ThumbNail.png";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>Featured Project</h2>

      <div className="project-card">

        <div className="project-image">
          <img src={ZombieGame} alt="Last Zombie Survival" />
        </div>

        <div className="project-info">

          <h3>Last Zombie Survival</h3>

          <p>
            A third-person zombie survival game built in Unity 6.
            Fight against waves of zombies using weapon mechanics,
            AI navigation, health & ammo systems, and immersive gameplay.
          </p>

          <div className="features">
            <p>✅ Third-Person Shooter</p>
            <p>✅ Zombie AI (NavMesh)</p>
            <p>✅ Health & Ammo System</p>
            <p>✅ Wave-Based Enemy Spawning</p>
            <p>✅ Unity 6 + C#</p>
            <p>✅ WebGL Ready</p>
          </div>

          <div className="tech-stack">
            <span>Unity 6</span>
            <span>C#</span>
            <span>WebGL</span>
            <span>NavMesh AI</span>
            <span>Wave System</span>
            <span>UI System</span>
          </div>

          <div className="buttons">
<a
  href="https://play.unity.com/en/games/44a513f5-7864-4a49-a98c-de8987f64dd2/zombiesurvival"
  target="_blank"
  rel="noopener noreferrer"
  className="live-btn"
>
  Live Demo
</a>

<a
  href="https://github.com/huzaifaramzan66-spece"
  target="_blank"
  rel="noopener noreferrer"
  className="github-btn"
>
  💻 GitHub
</a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;