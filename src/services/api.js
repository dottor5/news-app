import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: { "X-API-KEY": "10cf363b10c64bd2a7c423b5c5c98ed4" },
});

export default api;
