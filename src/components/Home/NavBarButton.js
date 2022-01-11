const NavBarButton = ({ id, text, section, clickStatus, handleClick }) => {
  return (
    <a
      id={id}
      className={clickStatus ? 'nav-bar-link-mobile' : 'nav-bar-link'}
      href={section}
      onClick={handleClick}
    >
      {text}
    </a>
  );
};

export default NavBarButton;
