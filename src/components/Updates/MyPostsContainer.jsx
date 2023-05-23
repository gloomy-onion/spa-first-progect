import React from "react";
import { addPost } from "../../state/updates-reducer";
import Updates from "./Updates";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.updates.postsData,
    newPostText: state.updates.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost
})(Updates);

export default MyPostsContainer;
