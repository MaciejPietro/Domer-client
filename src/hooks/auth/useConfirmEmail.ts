import type { ApiResponse, ConfirmEmailPayload } from "@/types/api";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import AuthService from "@/api/AuthService";

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
    mutationFn: ({ token, email }) => AuthService.confirmEmail(token, email),
  });
};

export default useConfirmEmail;
