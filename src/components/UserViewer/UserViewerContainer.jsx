import React from 'react';
import UserViewer from './UserViewer';

class UserViewerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentUser: null};
    }

    setCurrentUser(userId) {
        this.setState({ currentUser: userId});
    }

    render() {
        return (
            <>
                <UserViewer
                    users={this.props.users}
                    setCurrentUser={this.setCurrentUser}
                />
            </>
        );
    }
}

export default UserViewerContainer;
