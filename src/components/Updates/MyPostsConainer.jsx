import React from "react";
import { addPost, updateNewPostText } from "../../state/updates-reducer";
import Updates from "./Updates";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.updates.postsData,
    newPostText: state.updates.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(Updates);

export default MyPostsContainer;
