import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../helpers/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload.id, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload.id, "id", {
          followed: false,
        }),
      };

    case SET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload,
      };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(
              (id) => id !== action.payload.userId
            ),
        isFetching: action.payload.isFetching,
      };
    }

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({
  type: FOLLOW,
  payload: userId,
});

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  payload: userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});

export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: totalUsersCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  payload: { isFetching, userId },
});

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.requestUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setCurrentPage(currentPage));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => {
  return async (dispatch) => {
    await followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    await followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};

export default teamReducer;
