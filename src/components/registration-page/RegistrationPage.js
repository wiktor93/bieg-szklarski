import React from 'react';
import Button from '../atoms/Button';
import styles from './RegistrationPage.module.scss';
// import {registrationLink} from '../../assets/data';

const RegistrationPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>ZAPISY</h2>
      </header>

      <section className={styles.content}>
        <h3>
          {/* Zapisy zostały uruchomione! <br /> Formularz dostępny na stronie
          timekeeper.pl */}
          Tegoroczna edycja została odwołana. Zapraszamy w przyszłym roku.
        </h3>

        <Button disabled>
          {/* href={registrationLink} */}
          Zapisz się
        </Button>
      </section>
      <hr />
    </>
  );
};

export default RegistrationPage;
