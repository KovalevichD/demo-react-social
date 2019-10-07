import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../Redux/auth-reducer';

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        authData: state.auth
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);