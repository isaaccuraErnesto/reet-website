import NavBarButton from './NavBarButton'

const NavBarButtons = () => {
    return (
        <div id='nav-bar-links' className='d-flex justify-content-around'>
            <NavBarButton id='home-button' text='Home'/>
            <NavBarButton id='about-button' text='About'/>
            <NavBarButton id='projects-button' text='Projects'/>
            <NavBarButton id='services-button' text='Services'/>
            <NavBarButton id='contact-button' text='Contact'/>
        </div>
    )
}

export default NavBarButtons
