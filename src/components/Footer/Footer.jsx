import React from 'react';
import s from './Footer.module.css'
import logo from './../../pictures/jordan.png';

const Footer = () => {
  return (
    <footer>
      <div className={s.footerContainer}>
        <img src={logo} className={s.logo} />
        <div className={s.nav}>
          <a href='#'>contact</a> 
          <a href='#'>awards</a>
          <a href='#'>rewiews</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
