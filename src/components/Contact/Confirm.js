import emailjs from '@emailjs/browser';

const Confirm = ({ nextStep, prevStep, values, step }) => {
  const confirm = (e) => {
    e.preventDefault();
    //Process Form Data
    emailjs
      .sendForm(
        'service_nuzjt3l',
        'contact-form-enquiry',
        '#contact-form-2',
        'user_CczRaHfx6domfy9fngDoo'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    //Success Step
    nextStep();
  };

  const edit = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <form
      id={`contact-form-${step}`}
      className='contact-form'
      onSubmit={confirm}
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <div className='wide-fields'>
        <input
          id={`name-${step}`}
          className='form-input disabled name'
          type='text'
          name='name'
          value={values.name}
          form={`contact-form-${step}`}
          disabled
        />
        <label htmlFor={`name-${step}`} className='form-label disabled'>
          Name
        </label>
      </div>
      <div className='wide-fields'>
        <input
          id={`email-${step}`}
          className='form-input disabled'
          type='email'
          name='email'
          value={values.email}
          form={`contact-form-${step}`}
          disabled
        />
        <label htmlFor={`email-${step}`} className='form-label disabled'>
          Email
        </label>
      </div>
      <div className='double-field'>
        <div className='narrow-fields'>
          <input
            id={`phone-number-${step}`}
            className='form-input disabled phone-number'
            type='text'
            name='phoneNumber'
            value={values.phoneNumber}
            form={`contact-form-${step}`}
            disabled
          />
          <label
            htmlFor={`phone-number-${step}`}
            className='form-label disabled'
          >
            Phone Number
          </label>
        </div>
        <div className='narrow-fields'>
          <input
            id={`postcode-${step}`}
            className='form-input disabled postcode'
            type='text'
            name='postcode'
            value={values.postcode}
            form={`contact-form-${step}`}
            disabled
          />
          <label htmlFor={`postcode-${step}`} className='form-label disabled'>
            Postcode
          </label>
        </div>
      </div>
      <div className='wide-fields'>
        <textarea
          id={`message-${step}`}
          className='form-input disabled message'
          name='message'
          rows='3'
          value={values.message}
          form={`contact-form-${step}`}
          disabled
        />
        <label htmlFor={`message-${step}`} className='form-label disabled'>
          Message
        </label>
      </div>
      <div id='form-confirm-buttons' className='double-field'>
        <button
          id='edit'
          type='button'
          onClick={edit}
          form={`contact-form-${step}`}
        >
          Edit
        </button>
        <button id='confirm' type='submit' form={`contact-form-${step}`}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Confirm;
