import React from 'react';
import list from './../../img/list.png';
import styles from './NavBar.module.css';
import cn from 'classnames';
import {NavLink} from 'react-router-dom';
import linksPath from './linksPath';

const NavigationLink = (props) => {
    const {to, text} = props;

    return (
        <NavLink
            to={to}
            className={(navData) => (navData.isActive ? styles.active : '')}
        >
            {text}
        </NavLink>
    );
};

const NavBar = () => {
    return (
        <nav>
            <div className={cn(styles.show, styles.dropdown)}>
                <button onclick="myFunction()" className={styles.dropbtn}>
                    <img className={styles.list} src={list}/>
                </button>
                <div id="myDropdown" className={styles.dropdownContent}>
                    <div className={styles.dropdown}>
                        {linksPath.map((path) => {
                            return <NavigationLink to={path.to} text={path.text}/>;
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
