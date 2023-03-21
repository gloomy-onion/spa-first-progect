import React from "react";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import styles from "./UserViewer.module.css";
import cn from "classnames";

const UserViewer = (props) => {
  const onUserClick = (userId) => {
    props.setCurrentUser(userId);
  };
  return (
    <div className={styles.viewerContainer}>
      <div className={styles.viewerUsers}>
        {props.users.map((user) => (
          <div
            className={cn(styles.viewerUser, {
              [styles.active]:
                props.profile && props.profile.userId === user.id,
            })}
            onClick={() => {
              onUserClick(user.id);
            }}
          >
            {user.name}
          </div>
        ))}
      </div>
      <ProfileInfo profile={props.profile} updateStatus={() => {}} />
    </div>
  );
};

export default UserViewer;
