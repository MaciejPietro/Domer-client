import type { ApiResponse, LoginPayload } from "@/types/api";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toastSuccess } from "@/lib/toast";
import AuthService from "@/api/AuthService";
import { useNavigate } from "@tanstack/react-router";
import useAuthStore from "@/store/authStore";

type LoginResponse = ApiResponse & {
  status: number;
};

const useLogin = () => {
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  return useMutation<LoginResponse, AxiosError<string, any>, LoginPayload>({
    mutationKey: ["auth", "login"],
    mutationFn: AuthService.login,
    onSuccess: () => {
      toastSuccess("Logowanie przebiegło pomyślnie");

      setAuth(true);

      queueMicrotask(() => {
        void navigate({ to: "/" });
      });
    },
  });
};

export default useLogin;
