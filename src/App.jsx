import react from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Product from './components/Product';
import Process from './components/Process';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import Contact from './components/Contact';
import './index.css';


function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Product />
      <Process />
      <Testimonial />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
