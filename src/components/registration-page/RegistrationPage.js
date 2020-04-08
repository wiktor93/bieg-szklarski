import React from 'react';
import Button from '../atoms/Button';
import styles from './RegistrationPage.module.scss';
import {registrationLink} from '../../assets/data';

const RegistrationPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>ZAPISY</h2>
      </header>

      <section className={styles.content}>
        <h3>
          Zapisy zostały uruchomione! <br /> Formularz dostępny na stronie
          timekeeper.pl
        </h3>
        <Button href={registrationLink}>Zapisz się</Button>
      </section>
      <hr />
    </>
  );
};

export default RegistrationPage;
