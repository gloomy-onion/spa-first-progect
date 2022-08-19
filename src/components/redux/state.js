let rerenderEntireTree = () => {
    console.log('State changed.');
};
let state = {
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
};

export const addPost = () => {
    let newPost = {
        message: state.updates.newPostText,
        id: 5,
        likesCount: 0,
    };
    state.updates.postsData.push(newPost);
    state.updates.newPostText = '';
    rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
state.updates.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;
