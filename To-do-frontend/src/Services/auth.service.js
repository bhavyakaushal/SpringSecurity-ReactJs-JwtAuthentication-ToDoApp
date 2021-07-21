import axios from "axios";

const API_URL = "http://localhost:4545/api/auth/";

const register = (username, password) => {
  return axios.post(API_URL + "register", {
    username,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  export default {
    register,
    login,
    logout,
    getCurrentUser,
  };