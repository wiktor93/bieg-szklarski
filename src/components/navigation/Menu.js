import React from 'react';
import {NavLink} from 'react-router-dom';

import {routes} from '../../assets/data';
import styles from './Menu.module.scss';
import resizeTransitionStopper from '../../assets/resizeTransitionStopper';

const Menu = ({isOpen, closeMenu}) => {
  resizeTransitionStopper();

  return (
    <div className={isOpen ? `${styles.menu} ${styles.active}` : styles.menu}>
      <ul>
        {routes.map((route, i) => (
          <NavLink key={i} to={route.path} onClick={() => closeMenu(!isOpen)}>
            <li>{route.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
