import React from 'react';
import s from './Footer.module.css'
const Footer = () => {
  return (
    <footer>
      <div className={ s.footerContainer }>
        <div className={ s.nav }>
          <a href='#'>contact</a>
          <a href='#'>awards</a>
          <a href='#'>rewiews</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
