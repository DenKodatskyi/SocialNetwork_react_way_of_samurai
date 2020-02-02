const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 0, name: "Dimych"},
    { id: 1, name: "Ben" },
    { id: 2, name: "Sasha"}
  ],
  messages: [
    { id: 0, message: "Hi"},
    { id: 1, message: "Hi my name is Ben"},
    { id: 2, message: "Hello"}
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 3, message: body }]
      };
    default:
      return state;
  }
}

export const sendMessageAC = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody }
}


export default dialogsReducer;
