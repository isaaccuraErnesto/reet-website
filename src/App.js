import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import HomeImage from './img/WoodShavings.png'
import ReetLogo from './img/ReetLogo.png'
import AngleGrinder from './img/AngleGrinder.jpg'



const App = () => {
  return (
    <div className="site">
      <Home background={HomeImage} logo={ReetLogo}/>
      <About background={AngleGrinder}/>
      <Projects />
    </div>
  );
}

export default App;
