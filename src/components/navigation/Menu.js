import React from 'react';

import styles from './Menu.module.scss';

const Menu = ({open}) => {
  return (
    <div className={open ? `${styles.menu} ${styles.active}` : styles.menu}>
      <ul>
        <a className="active_page" href="/">
          <li className="main-page-btn">Start</li>
        </a>
        <a href="./result.html">
          <li>Wyniki</li>
        </a>
        <a href="./gallery.html">
          <li>Galeria</li>
        </a>
        <a href="./registration.html">
          <li>Zapisy</li>
        </a>
        <a href="./route.html">
          <li>Trasa</li>
        </a>
        <a href="./archives/2019/Regulamin.pdf">
          <li>Regulamin</li>
        </a>
        <a href="./contact.html">
          <li>Kontakt</li>
        </a>
      </ul>
    </div>
  );
};

export default Menu;
