import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import { renderContacts } from "../../../helpers/profile.jsx";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img src={profile.photos.large} alt={""} />
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div>{profile.aboutMe}</div>
      <div>Contacts:</div>
      {renderContacts(profile)}
    </div>
  );
};
export default ProfileInfo;
