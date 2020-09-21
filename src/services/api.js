import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: { "X-API-KEY": "b7fb08c9f94f4898ae24c81664e9ae7c" },
});

export default api;
