import React from 'react';
import logoImage from './../../pictures/jordan.png';
import NavBar from '../NavBar/NavBar';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.AppHeader}>
      <div className={s.headerContainer}>
        <div className={s.logo}>
          <img src={logoImage} className={s.logoImage} />
        </div>
        <NavBar />
      </div>
    </header>
  );
};
export default Header;
