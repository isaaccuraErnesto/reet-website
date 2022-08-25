import NavBarButton from './NavBarButton'

const NavBarButtons = ({ clickStatus, handleClick }) => {
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
        handleClick={handleClick}
      />
      <NavBarButton
        id='about-button'
        text='About'
        section='#about'
        clickStatus={clickStatus}
        handleClick={handleClick}
      />
      <NavBarButton
        id='projects-button'
        text='Projects'
        section='#projects'
        clickStatus={clickStatus}
        handleClick={handleClick}
      />
      <NavBarButton
        id='services-button'
        text='Services'
        section='#services'
        clickStatus={clickStatus}
        handleClick={handleClick}
      />
      <NavBarButton
        id='contact-button'
        text='Contact'
        section='#contact'
        clickStatus={clickStatus}
        handleClick={handleClick}
      />
    </div>
  )
}

export default NavBarButtons
