import NavBarButtons from './NavBarButtons'
import ReetLogo from './ReetLogo'

const NavBar = ({logo}) => {
    return (
        <div id='nav-bar' className='d-flex justify-content-between align-items-center'>
            <ReetLogo logo={logo}/>
            <NavBarButtons />
        </div>
    )
}

export default NavBar
