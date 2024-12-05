import type { ApiResponse } from "@/types/api";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toastSuccess } from "@/lib/toast";
import AuthService from "@/api/AuthService";
import { useNavigate } from "@tanstack/react-router";
import useAuthStore from "@/store/authStore";

const useLogout = () => {
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  return useMutation<ApiResponse, AxiosError<string, any>, void>({
    mutationKey: ["auth", "logout"],
    mutationFn: AuthService.logout,
    onSuccess: () => {
      toastSuccess("Zostałeś wylogowany");

      setAuth(false);

      queueMicrotask(() => {
        void navigate({ to: "/auth/login" });
      });
    },
  });
};

export default useLogout;
