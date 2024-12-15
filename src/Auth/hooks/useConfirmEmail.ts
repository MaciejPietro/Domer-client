import type { ConfirmEmailPayload } from "@/Auth/types";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import AuthService from "@/Auth/api/Service";
import type { ApiResponse } from "@/Common/api/types";

type LoginResponse = ApiResponse & {
  status: number;
};

const useConfirmEmail = () => {
  return useMutation<
    LoginResponse,
    AxiosError<string, any>,
    ConfirmEmailPayload
  >({
    mutationKey: ["auth", "confirmEmail"],
    mutationFn: AuthService.confirmEmail,
  });
};

export default useConfirmEmail;
