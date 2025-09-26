import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Values from './Values';
import Story from './Story';
import Issues from './Issues';
import Contact from './Contact';
import Donate from './Donate';
import Footer from './Footer';
import { useAnimation } from '../hooks/useAnimation';

const Home = () => {
  useAnimation();

  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Story />
      <Issues />
      <Contact />
      <Donate />
      <Footer />
    </div>
  );
};

export default Home;