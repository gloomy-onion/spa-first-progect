import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from "../../state/team-reducer";
import axios from 'axios';
import Team from './Team';

class TeamContainer extends React.Component {
  componentDidMount() {
    axios
    .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    )
    .then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
    .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    )
    .then((response) => {
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    return (
        <Team
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    );
  }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer);
