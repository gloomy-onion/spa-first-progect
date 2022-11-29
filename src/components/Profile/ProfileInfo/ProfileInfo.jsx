import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import {renderContacts} from '../../../helpers/profile.jsx';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img src={props.profile.photos.large} alt={""} />
      <div>{props.profile.aboutMe}</div>
      <div>Contacts:</div>
      {renderContacts(props.profile)}
    </div>
  );
};
export default ProfileInfo;
