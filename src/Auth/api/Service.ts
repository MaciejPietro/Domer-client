import type {
  LoginPayload,
  RegisterPayload,
  RemindPasswordPayload,
  ResetPasswordPayload,
  ConfirmEmailPayload,
} from "@/Auth/types";

import axiosClient from "./Client";
import { handleApiError } from "@/common/api/utils";

export default {
  login: async (values: LoginPayload) =>
    axiosClient.post(`/auth/login`, values),
  register: async (values: RegisterPayload) =>
    axiosClient
      .post(`/auth/register`, {
        ...values,
        clientUri: `${window.location.origin}/auth/emailconfirm`,
      })
      .catch(handleApiError),
  logout: () => axiosClient.post(`/auth/logout`, {}),
  confirmEmail: (values: ConfirmEmailPayload) =>
    axiosClient.post(`/auth/confirmemail`, values),
  remindPassword: (values: RemindPasswordPayload) =>
    axiosClient.post(`/auth/remindpassword`, {
      ...values,
      clientUri: `${window.location.origin}/auth/resetpassword`,
    }),
  resetPassword: (values: ResetPasswordPayload) =>
    axiosClient.post(`/auth/resetpassword`, values),
};
