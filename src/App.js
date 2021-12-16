import Home from './components/Home/Home'
import About from './components/About/About'
import HomeImage from './img/Tools.jpg'
import ReetLogo from './img/ReetLogo.png'
import AngleGrinder from './img/AngleGrinder.jpg'
import Forest from './img/WavesSunset.png'
import WoodWork from './img/WhiteTimber.jpg'



function App() {
  return (
    <div className="site">
      <Home background={HomeImage} logo={ReetLogo}/>
      <About img1={AngleGrinder} img2={Forest} img3={WoodWork}/>
    </div>
  );
}

export default App;
