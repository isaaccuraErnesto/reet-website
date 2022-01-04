import NavBarButton from './NavBarButton';

const NavBarButtons = ({ clickStatus }) => {
  return (
    <div
      id={clickStatus ? 'nav-bar-links-mobile' : 'nav-bar-links'}
      className='d-flex justify-content-around'
    >
      <NavBarButton
        id='home-button'
        text='Home'
        section='#home'
        clickStatus={clickStatus}
      />
      <NavBarButton
        id='about-button'
        text='About'
        section='#about'
        clickStatus={clickStatus}
      />
      <NavBarButton
        id='projects-button'
        text='Projects'
        section='#projects'
        clickStatus={clickStatus}
      />
      <NavBarButton
        id='services-button'
        text='Services'
        section='#services'
        clickStatus={clickStatus}
      />
      <NavBarButton
        id='contact-button'
        text='Contact'
        section='#contact'
        clickStatus={clickStatus}
      />
    </div>
  );
};

export default NavBarButtons;
