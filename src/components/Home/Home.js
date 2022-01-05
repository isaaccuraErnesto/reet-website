import Navbar from './NavBar';
import HomeFooter from './HomeFooter';

const Home = ({ logo }) => {
  return (
    <div id='home'>
      <Navbar logo={logo} />
      <div id='home-main-logo'>
        <img
          className='img-fluid'
          src={logo}
          alt='Reet Property Services Company Logo'
        />
      </div>
      <HomeFooter />
    </div>
  );
};

export default Home;
