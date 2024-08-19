import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Qualities from './components/qualities/Qualities';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <About/>
      <Qualities/>
      <Features/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
