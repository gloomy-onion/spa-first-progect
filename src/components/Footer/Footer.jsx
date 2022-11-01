import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/img/jordan.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <img src={logo} alt={""} />
        <div className={styles.nav}>
          <a href="#">contact</a>
          <a href="#">awards</a>
          <a href="#">reviews</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
