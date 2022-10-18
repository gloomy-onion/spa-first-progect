const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [{
        id: 1,
        followed: false,
        photoUrl: 'https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png',
        fullName: 'Artem Arzhanov',
        status: 'I am a vizualizator',
        location: {city: 'Voronezh', country: 'Russia'}
    }, {
        id: 2,
        followed: true,
        photoUrl: 'https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png',
        fullName: 'Mihail Andreev',
        status: 'I am a boss here',
        location: {city: 'Voronezh', country: 'Russia'}
    }, {
        id: 3,
        followed: false,
        photoUrl: 'https://propami.com/assets/corals/images/avatars/avatar_9.png',
        fullName: 'Lera Vasilyeva',
        status: 'I am an architect',
        location: {city: 'Voronezh', country: 'Russia'}
    }, {
        id: 4,
        followed: false,
        photoUrl: 'https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png',
        fullName: 'Vasya Popov',
        status: 'I am a manager',
        location: {city: 'Voronezh', country: 'Russia'}
    },],
    newPostText: 'blah-blah'
};

const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        };

        case UNFOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        };

        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }

        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({

    type: FOLLOW, userId
});

export const unfollowActionCreator = (userId) => ({

    type: UNFOLLOW, userId
});

export const setUsersActionCreator = (users) => ({

    type: SET_USERS, users
});

export default teamReducer;