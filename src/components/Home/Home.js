import Navbar from './NavBar'
import HomeFooter from './HomeFooter'

const Home = ({background, logo}) => {
    return (
        <div id='home' style={{ backgroundImage: `linear-gradient(to bottom, rgba(245, 245, 245, 1), rgba(245, 245, 245, 0)), url(${background})`, backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <Navbar logo={logo}/>
                <div id='home-main-logo' >
                    <img className='img-fluid' src={logo} alt="Reet Property Services Company Logo" />
                </div>
                <HomeFooter />
        </div>
    )
}

export default Home
