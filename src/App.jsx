import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black font-sans">
      <Navbar />

      <Hero />

      <Services />

      <Work />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
