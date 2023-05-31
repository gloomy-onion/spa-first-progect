import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import { renderContacts } from "../../../helpers/profile.jsx";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userImage from "./../../../assets/img/userImage.png";
import styles from "./../Profile.module.css";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <div>
        {isOwner && <button onClick={goToEditMode}>edit</button>}
        <div>
          <div>
            <b> Full name</b>: {profile.fullName}
          </div>
          <div>
            <b> Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</b>
          </div>
          {profile.lookingForAJob && (
            <div>
              <b> My skills</b>: {profile.lookingForAJobDescription}
            </div>
          )}
          <div>
            <b> About me: {profile.aboutMe}</b>
          </div>

          <div>Contacts:</div>
          {renderContacts(profile)}
        </div>
      </div>
    </div>
  );
};

const ProfileInfo = ({
  profile,
  isOwner,
  savePhoto,
  status,
  updateStatus,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then((response) => {
      setEditMode(false);
    });
  };

  return (
    <div className={styles.main}>
      <img
        src={profile.photos.large || userImage}
        className={styles.mainPhoto}
        alt={""}
      />
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div>
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {editMode ? (
          <ProfileDataForm
            profile={profile}
            onSubmit={onSubmit}
            initialValues={profile}
          />
        ) : (
          <ProfileData
            profile={profile}
            goToEditMode={() => {
              setEditMode(true);
            }}
            isOwner={isOwner}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
