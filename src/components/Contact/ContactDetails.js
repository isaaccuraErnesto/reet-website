import MapShot from '../../img/CoffsHarbourMapShot.jpg';

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
          <i className='fas fa-mobile-alt'></i>0413 777 667
        </div>
        <div id='contact-details-email-address'>
          <i className='far fa-envelope'></i>
          info@reetpropertyservices.com.au
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
