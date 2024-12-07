import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toastSuccess } from "@/Common/lib/toast";
import AuthService from "@/Auth/api/Service";
import { useNavigate } from "@tanstack/react-router";
import useAuthStore from "@/Auth/authStore";
import type { ApiResponse } from "@/Common/api/types";

const useLogout = () => {
  const { setAuth, setUser } = useAuthStore();

  const navigate = useNavigate();

  return useMutation<ApiResponse, AxiosError<string, any>, void>({
    mutationKey: ["auth", "logout"],
    mutationFn: AuthService.logout,
    onSuccess: () => {
      toastSuccess("Zostałeś wylogowany");

      setAuth(false);
      setUser(null);

      queueMicrotask(() => {
        void navigate({ to: "/auth/login" });
      });
    },
  });
};

export default useLogout;
