import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Button.module.scss';

const Button = ({children, href}) => {
  return href ? (
    <Link to={href}>
      <button className={styles.button}>{children}</button>
    </Link>
  ) : (
    <button className={styles.button}>{children}</button>
  );
};

export default Button;
