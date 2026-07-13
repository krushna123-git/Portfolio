import { useEffect, useState } from "react";

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
import ProgressBar from "./components/ProgressBar";
import HireMe from "./components/HireMe";
import CursorGlow from "./components/CursorGlow";
import { useState } from "react";
import ResumeModal from "./ResumeModal";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Effects */}
      <ProgressBar />
      <CursorGlow />
      
      <ScrollProgress />

      {/* Floating Hire Button */}
      <HireMe />

      {/* 3D Background */}
      <Hero3D />

      {/* Main Content */}
      <Navbar />
      <Hero />
      <Stats />
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