const HomeFooterIcon = ({ id, BootstrapClassName, caption }) => {
  return (
    <div
      id={id}
      className='home-footer-icon d-flex justify-content-center align-items-center'
    >
      <figure className='home-footer-fig d-flex flex-column justify-content-center align-items-center'>
        <div className='row fa-stack fa-3x'>
          <i className='fas fa-circle fa-stack-2x'></i>
          <i className={BootstrapClassName}></i>
        </div>
        <figcaption className='row'>{caption}</figcaption>
      </figure>
    </div>
  );
};

export default HomeFooterIcon;
