const Footer = ({ logo }) => {
  return (
    <div id='footer'>
      <div id='copyright-notice'>
        <span>
          <a id='footer-logo-button' href='#home'>
            <img
              id='footer-logo'
              src={logo}
              alt='Reet Property Services Company Logo'
              style={{ height: '20px', marginInlineEnd: '10px' }}
            />
          </a>
        </span>
        Copyright &copy; 2022 Reet Property Services
      </div>
      <div id='website-author'>
        Website by{' '}
        <a
          href='https://www.linkedin.com/in/eisaaccura/'
          target='_blank'
          rel='noreferrer'
        >
          Ernesto Isaaccura
        </a>
      </div>
    </div>
  );
};

export default Footer;
