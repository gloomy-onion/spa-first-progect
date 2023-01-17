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

  follow(u) {
    return instance
      .post(`follow/${u.id}`, {})
      .then((response) => response.data);
  },

  unfollow(u) {
    return instance.delete(`follow/${u.id}`).then((response) => response.data);
  },
};
