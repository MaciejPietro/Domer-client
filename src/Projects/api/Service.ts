import axiosClient from "./Client";

export default {
  getAll: (payload: URLSearchParams) =>
    axiosClient.get("", { params: payload }),
  getSingle: (projectId: string) => axiosClient.get(`/${projectId}`),
  deleteProject: (projectId: string) => axiosClient.delete(`/${projectId}`),
};
