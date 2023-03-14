const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  dialogueInfo: [
    { userName: "Color", id: "1" },
    { userName: "Floor", id: "2" },
    { userName: "Furniture", id: "3" },
    { userName: "Workers", id: "4" },
    { userName: "Light", id: "5" },
  ],
  messageContent: [
    { id: 1, messageText: "Your workers are ready to start" },
    { id: 2, messageText: "Your order is delayed" },
    { id: 3, messageText: "Your color has been changed" },
  ],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.payload;
      return {
        ...state,
        messageContent: [...state.messageContent, { id: 4, messageText: body }],
      };

    default:
      return state;
  }
};

export const sendMessage = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    payload: newMessageBody,
  };
};

export default chatReducer;
