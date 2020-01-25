/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import styles from './Sponsors.module.scss';
import {partners, mediaPatrones} from '../../assets/data';
import nsg from '../../images/sponsors/NSG.png';

const Sponsors = () => {
  return (
    <section className={styles.sponsors}>
      <h2>Sponsor główny</h2>
      <div className={styles.main_sponsor}>
        <a href="https://www.pilkington.com/pl-pl/pl" target="_blank">
          <img src={nsg} alt="NSG GROUP" />
        </a>
      </div>

      <h2>Partnerzy</h2>
      <div className={styles.partners}>
        {partners.map((partner, i) => (
          <a key={i} href={partner.link} target="_blank">
            <img src={partner.img} alt={partner.alt} />
          </a>
        ))}
      </div>

      <h2>Patronat medialny</h2>
      <div className={styles.media_patron}>
        {mediaPatrones.map((patrone, i) => (
          <a key={i} href={patrone.link} target="_blank">
            <img src={patrone.img} alt={patrone.alt} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
