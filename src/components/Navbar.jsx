import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">

      <div className="logo">
        Ascend<span>AI</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#features">Features</a>
        </li>

        <li>
          <a href="#roadmap">Roadmap</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
      </ul>

      <div className="nav-actions">
        <button className="login-btn">
          Login
        </button>

        <button className="start-btn">
          Get Started
        </button>
      </div>

    </nav>
  );
}

export default Navbar;