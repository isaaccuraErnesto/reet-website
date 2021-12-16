const NavBarButton = ({id, text, section}) => {
    return (
        <a id={id} className='nav-bar-link' href={section}>{text}</a>
    )
}

export default NavBarButton
