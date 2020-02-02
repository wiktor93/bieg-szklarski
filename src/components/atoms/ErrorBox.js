import React from 'react';
import styles from './ErrorBox.module.scss';

const ErrorBox = props => {
  return <div className={styles.error} {...props}></div>;
};

export default ErrorBox;
