import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Loader from './components/Loader';
import BackgroundBlobs from './components/BackgroundBlobs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Animated Background Blobs */}
          <BackgroundBlobs />

          {/* Main Content */}
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Internship />
            <Certifications />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
