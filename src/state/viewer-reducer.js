import { usersAPI } from "../api/api";

const SET_USERS = "viewer/SET_USERS";

const initialState = {
  users: [],
  profile: null
};

const viewerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    default:
      return state;
  }
};

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const getUsers = () => {
  return (dispatch) => {
    usersAPI.requestUsers().then((data) => {
      dispatch(setUsers(data.items));
    });
  };
};

export default viewerReducer;
