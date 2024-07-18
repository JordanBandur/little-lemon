import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import './assets/styles/global.scss';

function App() {
  return (
    <>
      <Header />
      <section className='container'>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </section>
      <Footer />
    </>
  );
}

export default App;
