import React from 'react';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus, setUserImage, saveProfile } from '../../Redux/pofilePage-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {

            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId);
        
        this.props.getStatus(userId);
    }

    componentDidMount() {
        
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                setUserImage={this.props.setUserImage}
                saveProfile={this.props.saveProfile} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, setUserImage, saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

