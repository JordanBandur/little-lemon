import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import './assets/styles/global.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/reserve" element={<Reservation />} />
        <Route path="/" element={
          <section className='container'>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
          </section>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
