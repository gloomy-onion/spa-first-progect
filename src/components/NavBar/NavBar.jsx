import React from 'react';
import list from './../../pictures/list.png';
import s from './NavBar.module.css';
import cx from 'classnames';

const NavBar = () => {
  return (
    <nav>
      <div className={cx(s.show, s.dropdown)}>
        <button onclick='myFunction()' className={s.dropbtn}>
          <img className={s.list} src={list} />
        </button>
        <div id='myDropdown' className={s.dropdownContent}>
          <div className={s.dropdown}>
            <a href='/MainContent'>Main Page</a>
            <a href='/Chat'>Chat</a>
            <a href='/Updates'>Updates</a>
            <a href='#'>Bars & Restaurants</a>
            <a href='#'>Team</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
