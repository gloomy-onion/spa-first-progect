import updatesReducer from './updates-reducer';
import chatReducer from './chat-reducer';

const store = {
    _state: {
        updates: {
            postsData: [
                {message: 'Hi', id: 1, likesCount: 20},
                {message: 'bye', id: 2, likesCount: 0},
                {message: 'bye', id: 2, likesCount: 88},
            ],
            newPostText: 'blah-blah'
        },

        chat: {
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
            newMessageBody: '',
        },
    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.updates = updatesReducer(this._state.updates, action);
        this._state.chat = chatReducer(this._state.chat, action);
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;