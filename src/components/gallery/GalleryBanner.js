import React from 'react';

import styles from './GalleryBanner.module.scss';
import Button from '../atoms/Button';

const GalleryBanner = () => {
  return (
    <section className={styles.wraper}>
      <div className={styles.btn_container}>
        <p>Zdjęcia z imprezy</p>
        <Button href="/gallery">Galeria</Button>
      </div>
    </section>
  );
};

export default GalleryBanner;
