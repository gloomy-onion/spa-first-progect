import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import { renderContacts } from "../../../helpers/profile.jsx";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img src={props.profile.photos.large} alt={""} />
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <div>{props.profile.aboutMe}</div>
      <div>Contacts:</div>
      {renderContacts(props.profile)}
    </div>
  );
};
export default ProfileInfo;
