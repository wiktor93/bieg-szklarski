import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptchaBox = props => {
  return (
    <ReCAPTCHA sitekey="6Ld2p8UUAAAAAB-PuaOhkZyqEvOmbA8fgxXoeFz_" {...props} />
  );
};

export default ReCaptchaBox;
