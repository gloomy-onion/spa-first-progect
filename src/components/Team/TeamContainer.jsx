import React from 'react';
import {connect} from 'react-redux';
import Team from './Team';
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from '../../state/team-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.teamPage.users
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
        }
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Team);