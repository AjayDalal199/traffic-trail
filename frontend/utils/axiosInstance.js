import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 10000, // optional timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
