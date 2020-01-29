import React from 'react';

import styles from './ContactForm.module.scss';
import Button from '../atoms/Button';

const ContactForm = () => {
  return (
    <>
      <form className={styles.form} action="#">
        <h2> Napisz do nas!</h2>

        <input type="text" name="email" placeholder="Podaj swój e-mail" />

        <textarea
          name="message"
          rows="10"
          placeholder="Treść wiadomości"
        ></textarea>

        <div
          className="g-recaptcha"
          data-callback="imNotARobot"
          data-sitekey="6Ld2p8UUAAAAAB-PuaOhkZyqEvOmbA8fgxXoeFz_"
        ></div>

        <Button>Wyślij</Button>
        {/* <button className="btn-submit">Wyślij</button> */}
        <h3 className="email-confirmation">confirmation</h3>
      </form>

      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
    </>
  );
};

export default ContactForm;
