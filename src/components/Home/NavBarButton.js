const NavBarButton = ({ id, text, section, clickStatus }) => {
  return (
    <a
      id={id}
      className={clickStatus ? 'nav-bar-link-mobile' : 'nav-bar-link'}
      href={section}
    >
      {text}
    </a>
  );
};

export default NavBarButton;
