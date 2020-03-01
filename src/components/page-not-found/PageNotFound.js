import React from 'react';

import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>Page not found</h2>
      </header>

      <div className={styles.error}>
        <h1>
          Przepraszamy, nie możemy wyświetlić takiej strony. Prosimy sprawdzić
          czy podany adres jest prawidłowy.
        </h1>
      </div>
    </>
  );
};

export default PageNotFound;
