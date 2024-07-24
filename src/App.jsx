import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import './assets/styles/global.scss';

const initializeTimes = () => [
  '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
];

const updateTimes = (state, action) => {
  // For now, return the same available times regardless of the selected date
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/reserve" element={<Reservation availableTimes={availableTimes} dispatch={dispatch} />} />
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
