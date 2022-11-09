const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const initialState = {
  users: [],
  newPostText: "blah-blah",
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    }

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({
  type: FOLLOW,
  payload: userId,
});

export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: totalUsersCount,
});

export default teamReducer;
