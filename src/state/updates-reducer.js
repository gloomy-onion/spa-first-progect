import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  postsData: [
    { message: "Hi", id: 1, likesCount: 20 },
    { message: "bye", id: 2, likesCount: 0 },
    { message: "bye", id: 3, likesCount: 88 },
  ],
  profile: null,
  status: "",
};

const updatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        message: action.newPostText,
        id: 5,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.payload,
      };
    }

    default:
      return state;
  }
};
export const addPost = (newPostText) => {
  return {
    type: ADD_POST,
    payload: newPostText,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    payload: profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    payload: status,
  };
};

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default updatesReducer;
