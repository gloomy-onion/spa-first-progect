import React from 'react';
import logoImage from '../../assets/img/jordan.png';
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.css';

const Header = () => {
    return (<header className={styles.AppHeader}>
            <div className={styles.headerContainer}>
                <img src={logoImage} className={styles.logoImage}/>
                <NavBar/>
            </div>
        </header>);
};
export default Header;
