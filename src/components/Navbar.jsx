import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Navbar">
      <div className="logo">
        Ascend<span>AI</span>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
        </li>

        <li>
          <a href="#roadmap" onClick={() => setMenuOpen(false)}>
            Roadmap
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <button className="login-btn">
            Login
          </button>
        </li>

        <li>
          <button
            className="start-btn"
            onClick={() => {
              document.getElementById("join")?.scrollIntoView({
                behavior: "smooth",
              });
              setMenuOpen(false);
            }}
          >
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;