import React from 'react';
import list from './../../img/list.png';
import styles from './NavBar.module.css';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className={cn(styles.show, styles.dropdown)}>
        <button onclick='myFunction()' className={styles.dropbtn}>
          <img className={styles.list} src={list} />
        </button>
        <div id='myDropdown' className={styles.dropdownContent}>
          <div className={styles.dropdown}>
            <NavLink to='/'>Main Page</NavLink>
            <NavLink to='/chat'>Chat</NavLink>
            <NavLink to='/updates'>Updates</NavLink>
            <a href='#'>Bars & Restaurants</a>
            <a href='#'>Team</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
