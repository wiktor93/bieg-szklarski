import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import Menu from './Menu';
import logo from '../../assets/images/logo.png';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [toogle, setToogle] = useState(false);

  return (
    <>
      <nav className={styles.mobile}>
        <NavLink exact to="/" className={styles.logo}>
          <img src={logo} alt="bieg szklarski - logo" />
        </NavLink>

        <div className={styles.race_name}>
          <span>BIEG SZKLARSKI</span>
        </div>

        <div className={styles.burger} onClick={() => setToogle(!toogle)}>
          {toogle ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
      </nav>

      <Menu isOpen={toogle} closeMenu={setToogle} />
    </>
  );
};

export default Navigation;
