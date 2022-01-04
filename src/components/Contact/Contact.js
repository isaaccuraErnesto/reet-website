import React, { useState } from 'react';
import Form from './Form';
import Confirm from './Confirm';
import Success from './Success';

const Contact = () => {
  const [step, setStep] = useState(1);

  const [fieldsValues, setFieldsValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    postcode: '',
    message: '',
  });

  //Next step
  const nextStep = () => {
    setStep(step + 1);
  };

  //Previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  //Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldsValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderSwitch = (step) => {
    switch (step) {
      case 1:
        return (
          <Form
            nextStep={nextStep}
            handleChange={handleChange}
            values={fieldsValues}
            step={step}
          />
        );
      case 2:
        return (
          <Confirm
            nextStep={nextStep}
            prevStep={prevStep}
            values={fieldsValues}
            step={step}
          />
        );
      case 3:
        return <Success values={fieldsValues} step={step} />;
      case 4:
        return <h1>Error</h1>;
      default:
        return <h1>Give us a call!</h1>;
    }
  };

  return <div id='contact'>{renderSwitch(step)}</div>;
};

export default Contact;
