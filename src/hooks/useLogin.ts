import type { ApiResponse, LoginPayload } from "@/types/api";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toastError } from "@/lib/toast";
import AuthService from "@/api/AuthService";

const handleError = (err: AxiosError<string, any>) => {
  if (err.response?.data) {
    const msg = err.response?.data;

    toastError(msg);
  }
};

const useLogin = () => {
  return useMutation<ApiResponse, AxiosError<string, any>, LoginPayload>({
    mutationKey: ["auth", "login"],
    mutationFn: AuthService.login,
  });
};

export default useLogin;
