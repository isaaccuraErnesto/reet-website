import AboutText from './AboutText';

const About = ({ background }) => {
  return (
    <div
      id='about'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(6, 37, 73, 0.8), rgba(6, 37, 73, 0.4)), url(${background})`,
      }}
    >
      <AboutText />
    </div>
  );
};

export default About;
