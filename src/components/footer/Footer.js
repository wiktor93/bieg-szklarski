/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import {currentYear} from '../..//assets/data';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a
          className={styles.facebook}
          href="https://www.facebook.com/biegszklarski/"
          target="_blank"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
        <a
          className={styles.youtube}
          href="https://www.youtube.com/channel/UC8WpUIFm1sltt1H_lvdBB9g"
          target="_blank"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      <p>
        Copyright © <span className="year">{currentYear}</span> Bieg Szklarski.
        All right reserved.
        <br />
        Created by{' '}
        <a href="https://www.linkedin.com/in/wiktor-walczak/" target="_blank">
          WW
        </a>
      </p>
    </footer>
  );
};

export default Footer;
