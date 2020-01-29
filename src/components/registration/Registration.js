import React from 'react';
import styles from './Registration.module.scss';

const Registration = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>ZAPISY</h2>
      </header>

      <section className={styles.content}>
        <h3>Zapisy dostępne wkrótce</h3>
      </section>
      <hr />
    </>
  );
};

export default Registration;
