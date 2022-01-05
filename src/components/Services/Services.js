const Services = () => {
  return (
    <div id='services' className='d-flex'>
      <div id='services-roofing' className='service-box'>
        <div className='service-icon row fa-stack fa-3x'>
          <i className='fas fa-circle fa-stack-2x'></i>
          <i className='fas fa-wrench fa-stack-1x fa-xs'></i>
        </div>
        <h4>Roofing</h4>
        <hr style={{ width: '50%' }} />
        <p>
          Roofs are our biggest defence against weather conditions. With over 10
          years experience in the roof-plumbing sector, leave all your roofing
          issues to us.
        </p>
        <hr style={{ width: '50%' }} />
        <ul>
          <li>Gutters</li>
          <li>Laser lights</li>
          <li>Roof cleaning</li>
          <li>Down pipes</li>
          <li>Flashings</li>
        </ul>
      </div>
      <div id='services-carpentry' className='service-box'>
        <div className='service-icon row fa-stack fa-3x'>
          <i className='fas fa-circle fa-stack-2x'></i>
          <i className='fas fa-hammer fa-stack-1x fa-xs'></i>
        </div>
        <h4>Carpentry</h4>
        <hr style={{ width: '50%' }} />
        <p>
          Let us tend to your carpentry needs. Whether you plan to build a brand
          new deck or wish to hang doors in your home, we will provide a finish
          you will be proud of.
        </p>
        <hr style={{ width: '50%' }} />
        <ul>
          <li>Decks</li>
          <li>Planter boxes</li>
          <li>Weatherboards</li>
          <li>Arcs and skirts</li>
          <li>Fences</li>
        </ul>
      </div>
      <div id='services-renovations' className='service-box'>
        <div className='service-icon row fa-stack fa-3x'>
          <i className='fas fa-circle fa-stack-2x'></i>
          <i className='fas fa-paint-roller fa-stack-1x fa-xs'></i>
        </div>
        <h4>Renovations</h4>
        <hr style={{ width: '50%' }} />
        <p>
          Need a new bathroom? Want to freshen up your kitchen or upgrade the
          bedrooms? Realised you deserve a cinema room? Allow us to help you see
          your reno through.
        </p>
        <hr style={{ width: '50%' }} />
        <ul>
          <li>Kitchen</li>
          <li>Bathrooms</li>
          <li>Outdoor areas</li>
          <li>Living spaces</li>
          <li>Bedrooms</li>
        </ul>
      </div>
      <div id='services-handyman' className='service-box'>
        <div className='service-icon row fa-stack fa-3x'>
          <i className='fas fa-circle fa-stack-2x'></i>
          <i className='fas fa-toolbox fa-stack-1x fa-xs'></i>
        </div>
        <h4>Handyman</h4>
        <hr style={{ width: '50%' }} />
        <p>
          As the saying goes, no job too big or too small. We are here to assist
          with all your needs. Our handymen are friendly, professional, and
          always up to the task.
        </p>
        <hr style={{ width: '50%' }} />
        <ul>
          <li>Tiling</li>
          <li>Gardening</li>
          <li>Furniture assembly</li>
          <li>Lock repair</li>
          <li>Painting</li>
        </ul>
      </div>
      <div id='services-maintenance' className='service-box'>
        <div className='service-icon row fa-stack fa-3x'>
          <i className='fas fa-circle fa-stack-2x'></i>
          <i className='fas fa-screwdriver fa-stack-1x fa-xs'></i>
        </div>
        <h4>Maintenance</h4>
        <hr style={{ width: '50%' }} />
        <p>
          It is smarter to maintain your property than to do nothing and pay for
          big repairs later. We offer all-round residential and commercial
          building maintenance.
        </p>
        <hr style={{ width: '50%' }} />
        <ul>
          <li>Yearly checks</li>
          <li>Bi-annual checks</li>
          <li>Bathroom regrouting</li>
          <li>Fascia and gutters</li>
          <li>Tap Leaks</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
