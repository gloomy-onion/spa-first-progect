import React from "react";


const UserViewer = (props) => {
  const onUserClick = (userId) => {
    props.setCurrentUser(userId)
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
    </div>
  );
};

export default UserViewer;
