import type { CreateProjectPayload } from "@/Projects/types/api";
import axiosClient from "@/Projects/api/Client";

export default {
  getAll: (payload: URLSearchParams) =>
    axiosClient.get("", { params: payload }),
  getSingle: (projectId: string) => axiosClient.get(`/${projectId}`),
  deleteProject: (projectId: string) => axiosClient.delete(`/${projectId}`),
  createProject: (payload: CreateProjectPayload) =>
    axiosClient.post("", payload),
};
