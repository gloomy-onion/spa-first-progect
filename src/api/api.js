import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "23ed3f25-bbb1-4929-8821-e3e0b0fc8c63",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(user) {
    return instance
      .post(`follow/${user.id}`, {})
      .then((response) => response.data);
  },

  unfollow(user) {
    return instance
      .delete(`follow/${user.id}`)
      .then((response) => response.data);
  },

  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
} ;
