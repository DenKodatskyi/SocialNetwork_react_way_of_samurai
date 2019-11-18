import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 0, message: "Hi, how are you?", likes: 15 },
        { id: 1, message: "It`s my first post", likes: 8 },
        { id: 2, message: "It`s test", likes: 1 }
      ],
      newPostText: "",
    },

    dialogsPage: {
      dialogs: [
        { id: 0, name: "Dimych" },
        { id: 1, name: "Ben" },
        { id: 2, name: "Sasha" }
      ],
      messages: [
        { id: 0, message: "Hi" },
        { id: 1, message: "Hi my name is Ben" },
        { id: 2, message: "Hello" }
      ],
      newMessageBody: ""
    }

  },

  _callSubscriber() { console.log("State change"); },

  getState() { return this._state; },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;