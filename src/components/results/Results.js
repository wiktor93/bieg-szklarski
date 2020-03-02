/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import styles from './Results.module.scss';
import {results2018, results2019} from '../../assets/results';

const Results = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>Wyniki</h2>
      </header>

      <section className={styles.results}>
        <h2>2. Bieg Szklarski — 15.09.2019</h2>
        <ul>
          {results2019.map(({name, link}, i) => (
            <li key={i}>
              <a href={link} target="_blank">
                {name}
              </a>
            </li>
          ))}
        </ul>

        <h2>1. Bieg Szklarski — 16.09.2018</h2>
        <ul>
          {results2018.map(({name, link}, i) => (
            <li key={i}>
              <a href={link} target="_blank">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <hr />
    </>
  );
};

export default Results;
