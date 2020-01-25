import React from 'react';

import Button from '../atoms/Button';
import styles from './Heading.module.scss';

const Heading = () => {
  return (
    <header className={styles.header}>
      <section className="slider"> </section>

      <div className="info">
        <div className="counter">
          <p>Do startu pozostało:</p>
          <p>
            <span className="time days"></span>dni
            <span className="time hours"></span>h
            <span className="time minutes"></span>
            min
            <span className="time seconds"></span>s
          </p>
          <a href="./registration.html">
            <Button>Zapisz się</Button>
          </a>
        </div>
        <ul className="details">
          <li>
            <p>
              <i className="fas fa-calendar-alt"></i> 20 września 2020
            </p>
          </li>
          <li>
            <p>
              <i className="fas fa-map-marked-alt"></i> Tarnobrzeg — Sandomierz
            </p>
          </li>
          <li>
            <p>
              <i className="fas fa-running"></i> Bieg Główny — 20 km
            </p>
          </li>
          <li>
            <p>
              <i className="fas fa-walking"></i> Nordic Walking — 10 km
            </p>
          </li>
          <li>
            <p>
              <i className="fas fa-running"></i> Szklana Piątka — 5 km
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Heading;
