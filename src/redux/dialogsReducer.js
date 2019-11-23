const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
        return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 3, message: body }]
      };
    default:
      return state;
  }
}

export const updateNewMessageBodyAC = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}

export const sendMessageAC = () => {
  return { type: SEND_MESSAGE }
}


export default dialogsReducer;
