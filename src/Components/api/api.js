import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "be7aa03b-75cf-4eef-8748-d8e6b115ee0d" }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data;
    });
  },
  getUsers2(currentPage = 1, pageSize = 10) {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data
    });
  }
}
