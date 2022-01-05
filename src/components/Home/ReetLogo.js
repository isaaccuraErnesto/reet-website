const ReetLogo = ({ logo, id, section }) => {
  return (
    <div id='reet-logo'>
      <a id={id} href={section}>
        <img
          id='nav-bar-logo'
          src={logo}
          alt='Reet Property Services Company Logo'
        />
      </a>
    </div>
  );
};

export default ReetLogo;
