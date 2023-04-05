import React from "react";
import UserViewer from "./UserViewer";
import { connect } from "react-redux";
import {getUserProfile} from '../../state/updates-reducer';
import {getUsers} from '../../state/viewer-reducer';

class UserViewerContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers();
  }

  setCurrentUser = (userId) => {
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <>
        <UserViewer
          users={this.props.users}
          setCurrentUser={this.setCurrentUser}
          profile={this.props.profile}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.viewer.users,
    profile: state.updates.profile,
  };
};

export default connect(mapStateToProps, { getUsers , getUserProfile })(UserViewerContainer);
