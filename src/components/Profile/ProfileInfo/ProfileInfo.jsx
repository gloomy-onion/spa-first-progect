import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import { renderContacts } from "../../../helpers/profile.jsx";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img src={props.profile.photos.large} alt={""} />
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      <div>{props.profile.aboutMe}</div>
      <div>Contacts:</div>
      {renderContacts(props.profile)}
    </div>
  );
};
export default ProfileInfo;
