import axiosClient from "./Client";

export default {
  getAll: (payload: URLSearchParams) =>
    axiosClient.get("", { params: payload }),
};
