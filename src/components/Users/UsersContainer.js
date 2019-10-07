import React from 'react';
import { connect } from 'react-redux';
import Users from "./Users";
import Preloader from '../common/preloader/Preloader';
import { follow, unfollow, toggleIsFollowing, requestUsers } from '../../Redux/usersPage-reducer';
import { compose } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../Redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChenged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
       
        return <>{this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChenged={this.onPageChenged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                isFollowing={this.props.isFollowing}
                toggleIsFollowing={this.props.toggleIsFollowing}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, { follow: follow, unfollow, toggleIsFollowing, getUsers: requestUsers })
)(UsersContainer)
