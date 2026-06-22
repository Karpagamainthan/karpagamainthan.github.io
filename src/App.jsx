import React, { useState, useCallback } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Loader from './components/layout/Loader/Loader';
import Cursor from './components/layout/Cursor/Cursor';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Experience from './components/sections/Experience/Experience';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import useScrollAnimate from './hooks/useScrollAnimate';
import './index.css';

const AppContent = () => {
  useScrollAnimate();
  return (
    <div className="app">
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
      <Cursor />
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const onLoaderComplete = useCallback(() => setLoaded(true), []);

  return (
    <ThemeProvider>
      {!loaded && <Loader onComplete={onLoaderComplete} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <AppContent />
      </div>
    </ThemeProvider>
  );
};

export default App;
