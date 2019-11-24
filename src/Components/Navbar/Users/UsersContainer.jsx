import React from "react";
import Users from "./Users.jsx";
import {connect} from "react-redux";
import { followAC, nofollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from './../../../redux/usersReducer';


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    nofollow: (userId) => {
      dispatch(nofollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);
