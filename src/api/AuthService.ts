import type { LoginPayload, RegisterPayload } from "@/types/api";

import axiosClient from "./apiClient";
import { handleApiError } from "./utils";

const AuthService = {
  login: async (values: LoginPayload) => {
    return axiosClient
      .post(`/auth/login`, values)
      .catch((err: unknown) => handleApiError(err, "Błędny email lub hasło"));
  },
  register: async (values: RegisterPayload) =>
    axiosClient.post(`/auth/register`, values).catch(handleApiError),
  logout: () => axiosClient.post(`/auth/logout`),
  info: () => axiosClient.get(`/identity/manage/info`),
};

export default AuthService;
