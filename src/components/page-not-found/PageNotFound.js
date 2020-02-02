import React from 'react';

import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.error}>
      <h1>Przepraszamy, nie możemy wyświetlić takiej strony.</h1>
      <h1>Prosimy sprawdzić czy podany adres jest prawidłowy.</h1>
    </div>
  );
};

export default PageNotFound;
