import React from "react";
import MyPostsContainer from "../Updates/MyPostsConainer";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import {Navigate} from 'react-router';

const Profile = (props) => {
    if (props.isAuth == false) return <Navigate to={'/login'}/>
    return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
