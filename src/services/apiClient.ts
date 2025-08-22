import axios from "axios";

const apiClient = axios.create({
//   baseURL: "http://localhost:4000/api",
  baseURL: "https://api-descubrimiento-familiar.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
