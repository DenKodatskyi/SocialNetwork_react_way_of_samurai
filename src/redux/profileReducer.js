import { usersAPI, profileAPI } from './../Components/api/api';

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 0, message: "Hi, how are you?", likes: 15 },
    { id: 1, message: "It`s my first post", likes: 8 },
    { id: 2, message: "It`s test", likes: 1 }
  ],
  profile: null,
  status: "",
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likes: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    default:
      return state;
  }
}

export const addPostAC = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (id) => (dispatch) => {
  usersAPI.getUserProfile(id).then(response => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatus = (id) => (dispatch) => {
  profileAPI.getStatus(id).then(response => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status)); 
    }
  });
};

export default profileReducer;
