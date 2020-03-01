import React from 'react';
import styles from './RunningRoutes.module.scss';
import Map from '../interactive-map/Map';

const RunningRoutes = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>Trasa</h2>
      </header>

      <section className={styles.content}>
        <div className={styles.records}>
          <h2>3. Bieg Szklarski — 20.09.2020</h2>
          <Map />
          <h2>2. Bieg Szklarski — 15.09.2019</h2>
          <iframe
            title="2. Bieg Szklarski - Prezentacja trasy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nHZtfVniumw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <hr></hr>
    </>
  );
};

export default RunningRoutes;
