import React from 'react';
import Navbar from './components/Navbar';
import ParallaxSection from './components/ParallaxSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import useNavScroll from './hooks/useNavScroll';
import useSmoothScroll from './hooks/useSmoothScroll';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  useNavScroll();
  useSmoothScroll();
  useScrollAnimation();

  return (
    <div className="App">
      <Navbar />
      <ParallaxSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;