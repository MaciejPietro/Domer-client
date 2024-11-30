import { API_PATH, API_URL } from "@/common/settings";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${API_URL}${API_PATH}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosClient;
