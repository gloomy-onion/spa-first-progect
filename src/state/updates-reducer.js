const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postsData: [
        {message: 'Hi', id: 1, likesCount: 20},
        {message: 'bye', id: 2, likesCount: 0},
        {message: 'bye', id: 3, likesCount: 88},
    ],
    newPostText: 'blah-blah'
};

const updatesReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            const newPost = {
                message: state.newPostText,
                id: 5,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        default:
            return state;
    }
};
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    };
};

export default updatesReducer;