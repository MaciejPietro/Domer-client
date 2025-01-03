import type { DeleteAccountPayload, UpdateUserPayload } from "@/User/types";
import axiosClient from "@/User/api/Client";
import { handleApiError } from "@/common/api/utils";

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
  delete: async (values: DeleteAccountPayload) =>
    axiosClient.delete(`/user`, { data: values }),
  info: () => axiosClient.get(`/user`),
};
