import React from "react";
import logoImage from "../../assets/img/jordan.png";
import styles from "./Header.module.css";
import NavBarContainer from '../NavBar/NavBarContainer';

const Header = (props) => {
  return (
    <header className={styles.AppHeader}>
      <div className={styles.headerContainer}>
        <img src={logoImage} className={styles.logoImage} alt={''}/>
        <NavBarContainer />
      </div>
    </header>
  );
};
export default Header;
