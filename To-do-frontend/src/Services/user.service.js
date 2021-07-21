import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4545/api/auth/";

const getTodo = () => {
  return axios.get(API_URL + "todo", { headers: authHeader() });
};

export default {
  getTodo,
};
