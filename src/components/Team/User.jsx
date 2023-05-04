import React from "react";
import styles from "./team.module.css";
import userImage from "../../assets/img/userImage.png";
import { NavLink } from "react-router-dom";
import Button from "../common/Button/Button";

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
   <div>
    <div className={styles.card}>
      <span >
        <div >
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userImage}
              className={styles.userPhoto}
              alt={""}
            />
          </NavLink>
        </div>
        <div>
          {" "}
          {user.followed ? (
            <Button
              text={"Unfollow"}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user);
              }}
            />
          ) : (
            <Button
              text={"Follow"}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user);
              }}
            />
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
   </div>
  );
};

export default User;
