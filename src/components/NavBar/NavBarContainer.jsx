import React from 'react';
import NavBar from './NavBar';
import {connect} from 'react-redux';
import {login, logout} from '../../state/auth-reducer';

class NavBarContainer extends React.Component {
    render() {

        return <div>
            <NavBar
            isAuth={this.props.isAuth}
            login={this.props.login}
            logout={this.props.logout}
            />
        </div>;
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};

export default connect(mapStateToProps, {logout})(NavBarContainer);