import React from "react";
import { connect } from "react-redux";
import Team from "./Team";
import {
  followActionCreator,
  setCurrentPageActionCreator, setTotalUsersCountActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from '../../state/team-reducer';

const mapStateToProps = (state) => {
  return {
    users: state.teamPage.users,
    pageSize: state.teamPage.pageSize,
    totalUsersCount: state.teamPage.totalUsersCount,
    currentPage: state.teamPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountActionCreator(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
