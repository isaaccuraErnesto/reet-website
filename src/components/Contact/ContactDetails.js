import MapShot from '../../img/PortMacquarieMapShot.png'

const ContactDetails = () => {
  return (
    <div id='contact-card'>
      <h2 id='contact-title'>GET IN TOUCH</h2>
      <div
        id='map-shot'
        style={{
          backgroundImage: `url(${MapShot})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      <div id='contact-details'>
        <div id='contact-details-phone-number'>
          <i className='fas fa-mobile-alt'></i>
          <a href='tel:0413777667'>0413 777 667</a>
        </div>
        <div id='contact-details-email-address'>
          <i className='far fa-envelope'></i>
          info@reetpropertyservices.com.au
        </div>
      </div>
      <div id='social-media'>
        <span id='social-media-message'>Follow us on social media</span>
        <div id='social-media-buttons'>
          <a id='social-media-instagram' className='social-media-button' href='https://www.instagram.com/reetpropertyservices/' target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i> Instagram</a>
          <a id='social-media-facebook' className='social-media-button' href='https://www.facebook.com/REET-Property-Services-111784514968619' target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i> Facebook</a>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
