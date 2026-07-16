import "./Hero.css";
import aiHero from "../assets/ai-hero.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left fade-in">

        <p className="hero-tag">
          🚀 Future Ready AI Platform
        </p>


        <h1>
          Build Your Future With
          <span> Artificial Intelligence</span>
        </h1>


        <p className="hero-description">
          AscendAI helps you learn AI skills, build real projects,
          and prepare for future careers with structured guidance.
        </p>


        <div className="hero-buttons">

          <button className="primary-btn">
            Start Building
          </button>


          <button className="secondary-btn">
            Explore Roadmap
          </button>

        </div>

      </div>



      <div className="hero-right fade-in">

        <div className="ai-card">

          <img
            src={aiHero}
            alt="AI Illustration"
            className="ai-image"
          />

        </div>

      </div>


    </section>
  );
}

export default Hero;