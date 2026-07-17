import "./Hero.css";
import aiHero from "../assets/ai-hero.png";

function Hero() {
  return (
    <section className="hero">

      {/* Background Effects */}

      <div className="bg-circle bg1"></div>
      <div className="bg-circle bg2"></div>
      <div className="grid-overlay"></div>

      {/* Left */}

      <div className="hero-left">

        <div className="hero-tag">
          🚀 Future Ready AI Platform
        </div>

        <h1>
          Build AI Skills.
          <br />
          Build Your <span>Career.</span>
          <br />
          Build Your <span>Future.</span>
        </h1>

        <p className="hero-description">
          Learn Artificial Intelligence from beginner to professional with
          structured roadmaps, real-world projects, AI mentors,
          certifications, interview preparation and career guidance.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Start Learning
          </button>

          <button className="secondary-btn">
            Explore Roadmap
          </button>

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h2>100+</h2>
            <span>Lessons</span>
          </div>

          <div className="stat-card">
            <h2>50+</h2>
            <span>Projects</span>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <span>AI Mentor</span>
          </div>

        </div>

      </div>

      {/* Right */}

      <div className="hero-right">

        <div className="glow-ring"></div>

        <div className="ai-card">

          <img
            src={aiHero}
            alt="Artificial Intelligence"
            className="ai-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;