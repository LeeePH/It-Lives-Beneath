import React from 'react';
import './index.css';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import About from './components/About';
import Features from './components/Features';
import Download from './components/Downloads';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Homepage />
      <About />
      <Features />
      <Download />
      <Footer />
    </div>
  );
};

export default App;
