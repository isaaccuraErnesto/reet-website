import NavBarButton from './NavBarButton'

const NavBarButtons = () => {
    return (
        <div id='nav-bar-links' className='d-flex justify-content-around'>
            <NavBarButton id='home-button' text='Home' section='#home'/>
            <NavBarButton id='about-button' text='About' section='#about'/>
            <NavBarButton id='projects-button' text='Projects' section='#projects'/>
            <NavBarButton id='services-button' text='Services' section='/#'/>
            <NavBarButton id='contact-button' text='Contact' section='/#'/>
        </div>
    )
}

export default NavBarButtons
