import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Button.module.scss';

const Button = (props) => {
  if (props.to)
    return (
      <Link to={props.to}>
        <button className={styles.button} {...props}>
          {props.children}
        </button>
      </Link>
    );
  else if (props.href)
    return (
      <a
        className={styles.a}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={styles.button}>{props.children}</button>
      </a>
    );
  else
    return (
      <button
        className={props.disabled ? styles.disabled : styles.button}
        {...props}
      >
        {props.children}
      </button>
    );
};

export default Button;
