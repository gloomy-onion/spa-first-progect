import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
        <div />
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
          <div>
            <b> Full name</b>: {createField("Full name", "fullname", [], Input)}
          </div>
          <div>
            <b>
              Looking for a job:
              {createField("", "lookingForAJob", [], Input, {
                type: "checkbox",
              })}
            </b>
          </div>

          <div>
            <b> My skills</b>:
            {createField(
              "My skills",
              "lookingForAJobDescription",
              [],
              Textarea
            )}
          </div>

          <div>
            <b>
              About me:
              {createField("About me", "aboutMe", [], Textarea)}
            </b>
          </div>
          <div>
            <b>Contacts:</b>
            {Object.keys(profile.contacts).map((key) => {
              return (
                <b key={key}>
                  {key}: {createField(key, "contacts." + key, [], Input)}
                </b>
              );
            })}
          </div>
        </div>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "editProfile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
