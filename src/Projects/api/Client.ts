import { API_PATH, API_URL } from "@/common/settings";
import axios from "axios";

export default axios.create({
  baseURL: `${API_URL}${API_PATH}/project`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
