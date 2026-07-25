import "./Hero.css";
import { motion } from "framer-motion";
import ZombieGame from "../assets/Zombie-game.png";

function Hero() {
  return (
    <motion.section
      className="hero"
      id="hero"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-left">
        <h3>Hi, I'm</h3>

        <h1>
          Huzaifa <span>Ramzan</span>
        </h1>

        <h2>Unity Game Developer | AI Student</h2>

        <p>
          I'm a passionate Unity Game Developer and BSAI student at The
          University of Lahore. I enjoy building immersive 3D games,
          AI-driven gameplay systems, and polished user experiences using
          Unity and C#.
        </p>

        <div className="hero-buttons">

          {/* View Projects */}
          <a href="#projects" className="project-btn">
            View Projects
          </a>

          {/* Download CV */}
          <a
            href="/Huzaifa_Ramzan_CV.pdf"
            className="cv-btn"
            download
          >
            Download CV
          </a>

        </div>
      </div>

      <div className="hero-right">
        <img
          src={ZombieGame}
          alt="Zombie Survival Game"
        />
      </div>

    </motion.section>
  );
}

export default Hero;