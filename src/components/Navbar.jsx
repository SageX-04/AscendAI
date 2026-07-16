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


      <button className="login-btn">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;