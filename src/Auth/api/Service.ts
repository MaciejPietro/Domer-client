import type { LoginPayload, RegisterPayload } from "@/Auth/types";

import axiosClient from "./Client";
import { handleApiError } from "@/Common/api/utils";

export default {
  login: async (values: LoginPayload) => {
    return axiosClient
      .post(`/auth/login`, values)
      .catch((err: unknown) => handleApiError(err, "Błędny email lub hasło"));
  },
  register: async (values: RegisterPayload) =>
    axiosClient
      .post(`/auth/register`, {
        ...values,
        clientUri: `${window.location.origin}/auth/emailconfirm`,
      })
      .catch(handleApiError),
  logout: () => axiosClient.post(`/auth/logout`),
  confirmEmail: (token: string, email: string) =>
    axiosClient.get(`/auth/emailconfirmation?token=${token}&email=${email}`),
};
