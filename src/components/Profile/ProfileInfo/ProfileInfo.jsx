import React from "react";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const ContactWebsites = Object.entries(props.profile.contacts).map(
    ([key, value]) => `${key[0].toUpperCase() + key.slice(1)}: ${value} `
  );

  return (
    <div>
      <img src={props.profile.photos.large} alt={""} />
      <div>{props.profile.aboutMe}</div>
      <div>Contacts:</div>
      <div>
        <span>{ContactWebsites}</span>
      </div>
    </div>
  );
};
export default ProfileInfo;
