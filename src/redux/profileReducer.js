import { usersAPI } from './../Components/api/api';

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 0, message: "Hi, how are you?", likes: 15 },
    { id: 1, message: "It`s my first post", likes: 8 },
    { id: 2, message: "It`s test", likes: 1 }
  ],
  newPostText: "",
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state, newPostText: action.newText
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    default:
      return state;
  }
}

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (id) => (dispatch) => {
  usersAPI.getUserProfile(id).then(response => {
    dispatch(setUserProfile(response.data));
  });
};




export default profileReducer;
