import React from 'react';
import logoImage from './../../img/jordan.png';
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.AppHeader}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src={logoImage} className={styles.logoImage} />
        </div>
        <NavBar />
      </div>
    </header>
  );
};
export default Header;
