import type { UpdateUserPayload } from "../types";
import axiosClient from "./Client";
import { handleApiError } from "@/Common/api/utils";

export default {
  resendEmailConfirmation: (email: string) =>
    axiosClient.post(`/user/resend-emailconfirmation`, {
      email,
      clientUri: `${window.location.origin}/auth/emailconfirm`,
    }),
  update: async (values: UpdateUserPayload) => {
    return axiosClient
      .patch(`/user`, {
        ...values,
        clientUri: `${window.location.origin}/auth/emailconfirm`,
      })
      .catch((err: unknown) => handleApiError(err, "Coś poszło nie tak"));
  },
  info: () => axiosClient.get(`/user/current`),
};
