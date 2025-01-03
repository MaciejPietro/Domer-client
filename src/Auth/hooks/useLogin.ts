import type { LoginPayload } from "@/Auth/types";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toastSuccess } from "@/common/lib/toast";
import AuthService from "@/Auth/api/Service";
import { useNavigate } from "@tanstack/react-router";
import useAuthStore, { type User } from "@/Auth/authStore";
import type { ApiError, ApiResponse } from "@/common/api/types";

type LoginResponse = ApiResponse & {
  status: number;
  data: User;
};

const useLogin = () => {
  const { setAuth, setUser } = useAuthStore();
  const navigate = useNavigate();

  return useMutation<LoginResponse, AxiosError<ApiError, any>, LoginPayload>({
    mutationKey: ["auth", "login"],
    mutationFn: AuthService.login,
    onSuccess: (response) => {
      toastSuccess("Logowanie przebiegło pomyślnie");

      setAuth(true);
      setUser(response.data);

      queueMicrotask(() => {
        void navigate({ to: "/" });
      });
    },
  });
};

export default useLogin;
