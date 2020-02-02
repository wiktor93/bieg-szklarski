import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptcha = props => {
  return (
    <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" {...props} />
  );
};

export default ReCaptcha;
