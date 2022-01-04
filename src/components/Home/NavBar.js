import React, { useState } from 'react';
import NavBarButtons from './NavBarButtons';
import ReetLogo from './ReetLogo';
import MobileMenu from './MobileMenu';

const NavBar = ({ logo }) => {
  const [clickStatus, setClickStatus] = useState(false);

  const handleClick = () => {
    setClickStatus(!clickStatus);
  };

  return (
    <nav
      id='nav-bar'
      className='d-flex justify-content-between align-items-center'
    >
      <ReetLogo logo={logo} />
      <MobileMenu clickStatus={clickStatus} handleClick={handleClick} />
      <NavBarButtons clickStatus={clickStatus} />
    </nav>
  );
};

export default NavBar;
