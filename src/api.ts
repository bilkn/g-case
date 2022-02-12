import axios from "axios";
const API_BASE_URL = "http://localhost:4000";

const fetchProducts = (query: URLSearchParams) =>
  axios.get(`${API_BASE_URL}/items?${query}`);

const fetchBrands = () => axios.get(`${API_BASE_URL}/brands`);

const API = {
  fetchProducts,
  fetchBrands
};

export default API;
