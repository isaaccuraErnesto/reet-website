import React, { useState, useEffect } from 'react';

const Form = ({ nextStep, handleChange, values, step }) => {
  const [formErrors, setFormErrors] = useState({});
  const [continueClicked, setContinueClicked] = useState(false);

  const checkErrors = () => {
    setFormErrors(validate(values));
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && continueClicked) {
      nextStep();
      console.log(values);
    }
  }, [formErrors, continueClicked, values, nextStep]);

  const validate = (values) => {
    const errors = {};
    const nameRegex = /^[a-z ,.'-]+$/i;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneNumberRegex =
      /^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/;
    const postcodeRegex = /^[0-9]{4}$/;

    if (!values.name) {
      errors.name = 'Please enter your name';
    } else if (values.name.length < 2 || !nameRegex.test(values.name)) {
      errors.name = 'Please enter a valid name';
    }
    if (!values.email) {
      errors.email = 'Please enter your email address';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Please enter your phone number';
    } else if (!phoneNumberRegex.test(values.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!values.postcode) {
      errors.postcode = 'Please enter your postcode';
    } else if (!postcodeRegex.test(values.postcode)) {
      errors.postcode = 'Please enter a valid postcode';
    }
    if (!values.message) {
      errors.message = 'Please tell us what your enquiry is about';
    }
    return errors;
  };

  const proceed = (e) => {
    e.preventDefault();
    setContinueClicked(true);
    checkErrors();
  };

  return (
    <form id={`contact-form-${step}`} className='contact-form'>
      <div className='wide-fields'>
        <input
          id={`name-${step}`}
          className='form-input name'
          type='text'
          placeholder=' '
          name='name'
          value={values.name}
          onChange={handleChange}
          form={`contact-form-${step}`}
        />
        <label htmlFor={`name-${step}`} className='form-label'>
          Name
        </label>
        <label htmlFor={`name-${step}`} className='form-placeholder'>
          John Doe
        </label>
        {formErrors.name && (
          <label htmlFor={`name-${step}`} className='form-error-message'>
            {formErrors.name}
          </label>
        )}
      </div>
      <div className='wide-fields'>
        <input
          id={`email-${step}`}
          className='form-input email'
          type='email'
          placeholder=' '
          name='email'
          value={values.email}
          onChange={handleChange}
          form={`contact-form-${step}`}
        />
        <label htmlFor={`email-${step}`} className='form-label'>
          Email
        </label>
        <label htmlFor={`email-${step}`} className='form-placeholder'>
          johndoe@email.com
        </label>
        {formErrors.email && (
          <label htmlFor={`email-${step}`} className='form-error-message'>
            {formErrors.email}
          </label>
        )}
      </div>
      <div className='double-field'>
        <div className='narrow-fields'>
          <input
            id={`phone-number-${step}`}
            className='form-input phone-number'
            type='text'
            placeholder=' '
            min='3'
            max='14'
            name='phoneNumber'
            value={values.phoneNumber}
            onChange={handleChange}
            form={`contact-form-${step}`}
          />
          <label htmlFor={`phone-number-${step}`} className='form-label'>
            Phone Number
          </label>
          <label htmlFor={`phone-number-${step}`} className='form-placeholder'>
            0432 123 432
          </label>
          {formErrors.phoneNumber && (
            <label
              htmlFor={`phone-number-${step}`}
              className='form-error-message'
            >
              {formErrors.phoneNumber}
            </label>
          )}
        </div>
        <div className='narrow-fields'>
          <input
            id={`postcode-${step}`}
            className='form-input postcode'
            type='text'
            placeholder=' '
            min='4'
            max='10'
            name='postcode'
            value={values.postcode}
            onChange={handleChange}
            form={`contact-form-${step}`}
          />
          <label htmlFor={`postcode-${step}`} className='form-label'>
            Postcode
          </label>
          <label htmlFor={`postcode-${step}`} className='form-placeholder'>
            1234
          </label>
          {formErrors.postcode && (
            <label htmlFor={`postcode-${step}`} className='form-error-message'>
              {formErrors.postcode}
            </label>
          )}
        </div>
      </div>
      <div className='wide-fields'>
        <textarea
          id={`message-${step}`}
          className='form-input message'
          placeholder=' '
          name='message'
          rows='3'
          value={values.message}
          onChange={handleChange}
          form={`contact-form-${step}`}
        />
        <label htmlFor={`message-${step}`} className='form-label'>
          Message
        </label>
        <label htmlFor={`message-${step}`} className='form-placeholder'>
          Hi, <br />
          <br />I was wondering...
        </label>
        {formErrors.message && (
          <label
            htmlFor={`message-${step}`}
            className='form-error-message-textarea'
          >
            {formErrors.message}
          </label>
        )}
      </div>
      <button
        id='continue'
        type='button'
        onClick={proceed}
        form={`contact-form-${step}`}
      >
        Continue
      </button>
    </form>
  );
};

export default Form;
