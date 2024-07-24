import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import './assets/styles/global.scss';
import { initializeTimes, updateTimes } from './hooks/useTimesReducer';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/reserve" element={<Reservation availableTimes={availableTimes} onDateChange={handleDateChange} />} />
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
