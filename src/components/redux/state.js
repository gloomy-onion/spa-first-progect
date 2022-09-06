let store = {
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
                {messageText: 'Your workers are ready to start'},
                {messageText: 'Your order is delayed'},
                {messageText: 'Your color has been changed'},
            ],
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                message: this._state.updates.newPostText,
                id: 5,
                likesCount: 0,
            };
            this._state.updates.postsData.push(newPost);
            this._state.updates.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.updates.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export default store;
window.store = store;