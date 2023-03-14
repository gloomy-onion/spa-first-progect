import React from "react";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";

const UserViewer = (props) => {
  const onUserClick = (userId) => {
    props.setCurrentUser(userId);
  };

  return (
    <div>
      {props.users.map((user) => (
        <div
          onClick={() => {
            onUserClick(user.id);
          }}
        >
          {user.name}
        </div>
      ))}
      <ProfileInfo profile={props.profile} updateStatus={()=>{}}/>
    </div>
  );
};

export default UserViewer;
