import Navbar from './NavBar';
import HomeFooter from './HomeFooter';
import AnimatedArrow from './AnimatedArrow';

const Home = ({ logo }) => {
  return (
    <div id='home'>
      <Navbar logo={logo} />
      <div id='home-main-logo'>
        <img
          className='img-fluid'
          src={logo}
          alt='Reet Property Services Company Logo - A Coffs Harbour local company offering quality at affordable rates.'
        />
      </div>
      <HomeFooter />
      <AnimatedArrow />
    </div>
  );
};

export default Home;
