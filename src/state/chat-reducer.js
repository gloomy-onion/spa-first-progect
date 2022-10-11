const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    dialogueInfo: [
        {userName: 'Color', id: '1'},
        {userName: 'Floor', id: '2'},
        {userName: 'Furniture', id: '3'},
        {userName: 'Workers', id: '4'},
        {userName: 'Light', id: '5'},
    ],
    messageContent: [
        {id: 1, messageText: 'Your workers are ready to start'},
        {id: 2, messageText: 'Your order is delayed'},
        {id: 3, messageText: 'Your color has been changed'},
    ],
    newMessageBody: 'la-la-la',
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };

        case SEND_MESSAGE:
            const body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messageContent: [...state.messageContent, {id: 4, messageText: body}]
            };

        default:
            return state;
    }
};

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    };
};

export default chatReducer;