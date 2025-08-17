import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Experience from './components/sections/Experience/Experience';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import useScrollAnimate from './hooks/useScrollAnimate';
import './index.css';

const App = () => {
  useScrollAnimate();

  return (
    <ThemeProvider>
      <div className="app">
        <ToastContainer position="top-center" autoClose={3000} />
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
    </ThemeProvider>
  );
};

export default App;