import React from "react";
import Post from "./Post/Post";
import styles from "./Updates.module.css";
import cn from "classnames";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../helpers/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const Updates = (props) => {
  const { postsData } = props;

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={cn(styles.posts)}>
      <h3>Our Thoughts and Updates</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={styles.posts}>
        {postsData.map((data) => {
          return (
            <Post
              message={data.message}
              id={data.id}
              likesCount={data.likesCount}
            />
          );
        })}
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newPostText"}
          component={Textarea}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Post</button>
      </div>
    </form>
  );
};

AddNewPostForm = reduxForm({ form: "UpdatesAddNewPostForm" })(AddNewPostForm);

export default Updates;
