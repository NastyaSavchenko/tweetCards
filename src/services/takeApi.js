import axios from "axios";

const URL = `https://648b7a0c17f1536d65eafeb2.mockapi.io/api/tweets/`;

export const api = axios.create({
  baseURL: URL,
});

export const getAllUsers = () => {
  const response = api.get(`/users`);
  return response;
};

export const getUsers = (page) => {
  const response = api.get(`/users?limit=3&page=${page}`);
  return response;
};

export const changeFollowers = (id, user) => {
  return api.put(`/users/${id}`, user);
};
