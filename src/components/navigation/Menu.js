import React from 'react';
import {NavLink} from 'react-router-dom';

import {routes} from '../../assets/data';
import styles from './Menu.module.scss';

const Menu = ({open}) => {
  return (
    <div className={open ? `${styles.menu} ${styles.active}` : styles.menu}>
      <ul>
        {routes.map((route, i) => (
          <NavLink key={i} to={route.path}>
            <li>{route.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
