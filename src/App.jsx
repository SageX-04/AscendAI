import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <Features />
        <Roadmap />
        <About />
        <CTA/>
      </main>
      <Footer />

    </div>
  );
}

export default App;