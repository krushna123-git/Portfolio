import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero3D from "./components/Hero3D";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import HireMe from "./components/HireMe";

function App() {
  return (
    <>
      <ScrollProgress />
      <HireMe />
      <Hero3D />
      <Navbar />
      <Hero />
      {/* <Stats/> */}
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;