import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptchaBox = props => {
  return (
    <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" {...props} />
  );
};

export default ReCaptchaBox;
