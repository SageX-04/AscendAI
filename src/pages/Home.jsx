import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Roadmap from "../components/Roadmap";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Roadmap />
      <About />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;