const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const updatesReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                message: state.newPostText,
                id: 5,
                likesCount: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export default updatesReducer;