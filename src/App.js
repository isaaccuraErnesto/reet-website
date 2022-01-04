import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HomeImage from './img/WoodShavings.png';
import ReetLogo from './img/ReetLogo.png';
import AngleGrinder from './img/AngleGrinder.jpg';

const App = () => {
  return (
    <div className='site'>
      <Home background={HomeImage} logo={ReetLogo} />
      <About background={AngleGrinder} />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
