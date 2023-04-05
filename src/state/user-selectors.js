import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
  return state.teamPage.users;
};

export const getUsers = createSelector(
  getUsersSelector,
  (users) => {
    return users.filter((u) => true);
  }
);

export const getPageSize = (state) => {
  return state.teamPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.teamPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.teamPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.teamPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.teamPage.followingInProgress;
};
