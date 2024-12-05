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
    axiosClient
      .post(`/auth/register`, {
        ...values,
        clientURI: `${window.location.origin}/auth/emailconfirm`,
      })
      .catch(handleApiError),
  logout: () => axiosClient.post(`/auth/logout`),
  confirmEmail: (token: string, email: string) =>
    axiosClient.get(`/auth/emailconfirmation?token=${token}&email=${email}`),
  info: () => axiosClient.get(`/identity/manage/info`),
};

export default AuthService;
