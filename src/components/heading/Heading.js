import React from 'react';

import InfoBanner from './InfoBanner';
import styles from './Heading.module.scss';

const Heading = () => {
  return (
    <header className={styles.header}>
      <InfoBanner />
    </header>
  );
};

export default Heading;
