import React from "react";
import MyPostsContainer from "../Updates/MyPostsConainer";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
