import React, {useState, useEffect} from 'react';

import Button from '../../atoms/Button';
import styles from './InfoBanner.module.scss';
import {bannerDetails, startDate} from '../../../assets/data';
import calculateTimeLeft from '../../../assets/calculateTimeLeft';

const InfoBanner = () => {
  const [time, setTime] = useState(calculateTimeLeft(startDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft(startDate));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.info}>
      <div className={styles.time}>
        <p>Do startu pozostało:</p>
        <p>
          <span>{time.days}</span>dni
          <span>{time.hours}</span>h<span>{time.minutes}</span>min
          <span>{time.seconds}</span>s
        </p>
        <Button href="./zapisy">Zapisz się</Button>
      </div>

      <ul className={styles.details}>
        {bannerDetails.map((detail, i) => (
          <li key={i}>
            <p>
              <i className={detail.icon}></i>
              {detail.info}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoBanner;
