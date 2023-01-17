import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFollowingProgress,
  toggleIsFetching,
  unfollow,
} from '../../state/team-reducer';
import Team from "./Team";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class TeamContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
    });
    this.props.toggleIsFetching(false);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Team
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.teamPage.users,
    pageSize: state.teamPage.pageSize,
    totalUsersCount: state.teamPage.totalUsersCount,
    currentPage: state.teamPage.currentPage,
    isFetching: state.teamPage.isFetching,
    toggleFollowingProgress: state.teamPage.toggleFollowingProgress
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress
})(TeamContainer);
