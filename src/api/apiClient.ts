import axios from "axios";

const API_URL = "http://localhost:5180";
// axios.interceptors.response.use(
//     (response) => response.data,
//     (error) => {
//         if (error.response.status === 419) {
//             window.location.reload()
//         } else if (error.response.status >= 500) {
//             console.error('An internal server error occurred.')
//         } else if (error.response.status >= 400) {
//             console.error('Invalid request. Please check your input.')
//         }

//         return Promise.reject(error)
//     }
// )

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const axiosClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // Authorization:
    // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1hY2llakBnbWFpbC5jb20iLCJqdGkiOiIyNDVlMTVmNi1mZjE1LTQ3YzItYjE4My0zNDczMjljNjRkZGMiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE3MDkzNzk2NzcsImV4cCI6MTcwOTM4MzI3NywiaWF0IjoxNzA5Mzc5Njc3LCJpc3MiOiJodHRwczovL2lkLnRvZG9hcHAuY29tIiwiYXVkIjoiaHR0cHM6Ly90b2Rvcy50b2RvYXBwLmNvbSJ9.jE-eNrcHl87icsuPSfY5NLQjaQuVNV92DZGnbA8tgKk",
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    // const { origin } = new URL(API_URL);
    // const allowedOrigins = [API_URL];

    // const token = window.localStorage.getItem("mytoken");

    // console.log("token", token);

    // if (allowedOrigins.includes(origin)) {
    // config.headers["authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
