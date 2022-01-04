const MobileMenu = ({ handleClick, clickStatus }) => {
  return (
    <div id='mobile-menu-button' onClick={handleClick}>
      <i className={clickStatus ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
  );
};

export default MobileMenu;
