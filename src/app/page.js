import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlowCursor from "./components/ui/GlowCursor";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

export default function Home() {
  return (
    <main>
      <GlowCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
