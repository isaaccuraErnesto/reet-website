import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ReetLogo from './img/ReetLogo.svg'
import ReetLogoBlack from './img/ReetLogoBlack.svg'

const App = () => {
  return (
    <div className='site'>
      <Home logo={ReetLogo} />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer logo={ReetLogoBlack} />
    </div>
  )
}

export default App
