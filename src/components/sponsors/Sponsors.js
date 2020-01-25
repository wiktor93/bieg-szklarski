/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import styles from './Sponsors.module.scss';
import nsg from '../../images/sponsors/NSG.png';
import mosir_sandomierz from '../../images/sponsors/mosir_sandomierz.jpg';
import mosir_tarnobrzeg from '../../images/sponsors/mosir_tbg.JPG';
import dom_dziecka from '../../images/sponsors/domdzieckawskopaniu.jpg';
import bbl from '../../images/sponsors/biegambolubie.jpg';
import radio_leliwa from '../../images/sponsors/radioleliwa.png';
import itv_wisla from '../../images/sponsors/itv_wisla.png';
import nadwisla24 from '../../images/sponsors/nadwisla24.png';
import echodnia from '../../images/sponsors/echodnia.jpg';
import sandomierztv from '../../images/sponsors/sandomierztv.png';

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
        <a href="http://mosir.sandomierz.pl/" target="_blank">
          <img src={mosir_sandomierz} alt="MOSIR Sandomierz" />
        </a>
        <a href="http://mosir.tarnobrzeg.pl/" target="_blank">
          <img src={mosir_tarnobrzeg} alt="MOSIR Tarnobrzeg" />
        </a>
        <a href="https://www.facebook.com/domdziecka.skopanie/" target="_blank">
          <img src={dom_dziecka} alt="Dom dziecka w Skopaniu" />
        </a>
        <a
          href="https://www.facebook.com/pages/category/Community/Biegam-Bo-Lubi%C4%99-Sandomierz-1898374857096842/"
          target="_blank"
        >
          <img src={bbl} alt="Biegam Bo Lubię" />
        </a>
      </div>

      <h2>Patronat medialny</h2>
      <div className={styles.media_patron}>
        <a href="http://leliwa.pl/" target="_blank">
          <img src={radio_leliwa} alt="Radio Leliwa" />
        </a>
        <a href="https://itvwisla.tv/" target="_blank">
          <img src={itv_wisla} alt="iTV WISŁA" />
        </a>
        <a href="http://nadwisla24.pl/" target="_blank">
          <img src={nadwisla24} alt="Nad Wisłą 24" />
        </a>
        <a href="https://echodnia.eu/" target="_blank">
          <img src={echodnia} alt="Echo Dnia" />
        </a>
        <a href="https://www.sandomierztv.pl/" target="_blank">
          <img src={sandomierztv} alt="Sandomierz tv" />
        </a>
      </div>
    </section>
  );
};

export default Sponsors;
