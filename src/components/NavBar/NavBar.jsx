import React from "react";
import list from "../../assets/img/list.png";
import styles from "./NavBar.module.css";
import cn from "classnames";
import basePath from "./basePath";
import { NavigationLink } from "../common/NavigationLink/NavigationLink";
import Button from "../common/Button/Button";

const NavBar = (props) => {
  return (
    <nav>
      <div className={cn(styles.show, styles.dropdown)}>
        <img className={styles.list} src={list} alt={""} />
        <div className={styles.dropdownContent}>
          <div className={styles.navbar}>
            {basePath.map((path) => {
              return <NavigationLink key={path.to} to={path.to} text={path.text} />;
            })}
            {props.isAuth ? (
              <div>
                {props.login}
                <Button text={"Log Out"} onClick={props.logout} />
              </div>
            ) : (
              <NavigationLink to={"/login"} text={"Login"} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
