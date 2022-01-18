import axios from "axios";
const API_BASE_URL = "http://localhost:4000";

const fetchProducts = (query: string) => {
  return axios.get(`${API_BASE_URL}/items?${query}`);
};

export default {
  fetchProducts,
};
