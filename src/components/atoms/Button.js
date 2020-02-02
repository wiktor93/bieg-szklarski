import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Button.module.scss';

const Button = props => {
  return props.href ? (
    <Link to={props.href}>
      <button className={styles.button} {...props}>
        {props.children}
      </button>
    </Link>
  ) : (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
