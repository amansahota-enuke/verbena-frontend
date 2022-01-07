import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const ApiService = {
  get: async (url, payload) => await axios.get(url, { params: payload }),
  post: async (url, body) => await axios.post(url, body),
  put: async (url, body) => await axios.put(url, body),
  delete: async (url, body) => await axios.delete(url),
};

export default ApiService;
