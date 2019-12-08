import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "be7aa03b-75cf-4eef-8748-d8e6b115ee0d" },
});

export const profileAPI = {
  getUserProfile(id) {
    return instance.get(`profile/${id}`);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status});
  }
}

export const usersAPI = {
  getUserProfile(id) {
    console.warn("Old method. Please use profileAPI object.");
    return profileAPI.getUserProfile(id);
  },
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data;
    });
  },
  getLoginMe() {
    return instance.get(`auth/me`).then(response => {
      return response.data;
    });
  },
  follow(id) {
    return instance.post(`follow/${id}`);
  },
  nofollow(id) {
    return instance.delete(`follow/${id}`);
  }
}

export const authAPI = {
  getLoginMe() {
    return instance.get(`auth/me`);
    }
}

