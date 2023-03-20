import React from "react";
import list from "../../assets/img/list.png";
import styles from "./NavBar.module.css";
import cn from "classnames";
import basePath from "./basePath";
import { NavigationLink } from "../common/NavigationLink/NavigationLink";

const NavBar = (props) => {

  return (
    <nav>
      <div className={cn(styles.show, styles.dropdown)}>
        <img className={styles.list} src={list} alt={""} />
        <div className={styles.dropdownContent}>
          <div className={styles.dropdown}>
            {basePath.map((path) => {
              return <NavigationLink to={path.to} text={path.text} />;
            })}
              {props.isAuth ? <div>props.login</div> - <button onClick={props.logout}> Log out </button> : <NavigationLink to={"/login"} text={"Login"} />}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
