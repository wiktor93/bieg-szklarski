import React from 'react';
import styles from './ContactDetails.module.scss';
import {contactDetails} from '../../assets/data';

const ContactDetails = () => {
  return (
    <>
      <h2>Masz pytanie lub sugestię?</h2>

      <div className={styles.details}>
        <p>
          <i className="fas fa-envelope"></i> {contactDetails.email}
        </p>
        <p>
          <i className="fas fa-phone"> </i> {contactDetails.phone}
        </p>
      </div>
    </>
  );
};

export default ContactDetails;
