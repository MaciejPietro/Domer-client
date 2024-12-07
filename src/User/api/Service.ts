import type { UpdateUserPayload } from "../types";
import axiosClient from "./Client";
import { handleApiError } from "@/Common/api/utils";

export default {
  update: async (values: UpdateUserPayload) => {
    return axiosClient
      .patch(`/user`, values)
      .catch((err: unknown) => handleApiError(err, "Coś poszło nie tak"));
  },
  info: () => axiosClient.get(`/user/current`),
};
