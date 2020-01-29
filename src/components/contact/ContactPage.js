import React from 'react';
import styles from './ContactPage.module.scss';

import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>Dane kontaktowe</h2>
      </header>

      <section className={styles.content}>
        <ContactDetails />
        <ContactForm />
      </section>

      <hr className="contact-page-hr" />
    </>
  );
};

export default ContactPage;
