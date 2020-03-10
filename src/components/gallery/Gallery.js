/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import {gallery2018, gallery2019} from '../../assets/galleries';
import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>Galerie z zawodów</h2>
      </header>

      <section className={styles.content}>
        <h2>II Bieg Szklarski — 15.09.2019</h2>
        <ul>
          {gallery2019.map(({name, link}, i) => (
            <li key={i}>
              <a href={link} target="_blank">
                {name}
              </a>
            </li>
          ))}
        </ul>
        <h2>I Bieg Szklarski — 16.09.2018</h2>
        <ul>
          {gallery2018.map(({name, link}, i) => (
            <li key={i}>
              <a href={link} target="_blank">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <hr></hr>
    </>
  );
};

export default Gallery;
