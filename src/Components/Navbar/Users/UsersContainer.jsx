import React from 'react';
import { connect } from 'react-redux';
import { follow, nofollow, setCurrentPage, toggleFollowInProgress, getUsers } from './../../../redux/usersReducer';
import Users from './Users';
import Preloader from '../../assets/Preloader/preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
    { this.props.isFetching ? <Preloader /> : null }
    <Users totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      follow={this.props.follow}
      nofollow={this.props.nofollow}
      followInProgress={this.props.followInProgress} />
      </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followInProgress: state.usersPage.followInProgress
  }
}

export default connect(mapStateToProps, {follow, nofollow, setCurrentPage, toggleFollowInProgress, getUsers})(UsersContainer);

