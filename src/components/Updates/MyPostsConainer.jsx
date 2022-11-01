import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../state/updates-reducer";
import Updates from "./Updates";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.updates.postsData,
    newPostText: state.updates.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Updates);

export default MyPostsContainer;
