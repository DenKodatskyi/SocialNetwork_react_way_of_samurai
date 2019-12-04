import { usersAPI } from './../Components/api/api';

const FOLLOW = "FOLLOW";
const NOFOLLOW = "NOFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOW_IN_PROGRESS = "TOGGLE_FOLLOW_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(/* u - user */u => {
          if (u.id === action.id) {
            return { ...u, followed: true }
          }
          return u;
        })
      }

    case NOFOLLOW:
      return {
        ...state, users: state.users.map(/* u - user */u => {
          if (u.id === action.id) {
            return { ...u, followed: false }
          }
          return u;
        })
      }

    case SET_USERS:
      return { ...state, users: action.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count }

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }

    case TOGGLE_FOLLOW_IN_PROGRESS:
      return {
        ...state,
        followInProgress: action.isFetching
          ? [...state.followInProgress, action.id]
          : state.followInProgress.filter(id => id != action.id)
      }

    default:
      return state;
  }
}

export const followSuccess = (id) => ({ type: FOLLOW, id });
export const nofollowSuccess = (id) => ({ type: NOFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowInProgress = (isFetching, id) => ({ type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, id });

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setCurrentPage(currentPage));
    });
  }
}

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowInProgress(true, id));
    usersAPI.follow(id).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(id));
      }
      dispatch(toggleFollowInProgress(false, id));
    });
  }
}

export const nofollow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowInProgress(true, id));
    usersAPI.nofollow(id).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(nofollowSuccess(id));
      }
      dispatch(toggleFollowInProgress(false, id));
    });
  }
}

export default usersReducer;