import type { ResetPasswordPayload } from "@/Auth/types";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import AuthService from "@/Auth/api/Service";
import type { ApiResponse } from "@/common/api/types";
import { toastSuccess } from "@/common/lib/toast";
import { useNavigate } from "@tanstack/react-router";

const useResetPassword = () => {
  //

  const navigate = useNavigate();

  return useMutation<
    ApiResponse,
    AxiosError<string, any>,
    ResetPasswordPayload
  >({
    mutationKey: ["auth", "resetpassword"],
    mutationFn: AuthService.resetPassword,
    onSuccess: () => {
      toastSuccess("Hasło zostało zmienione. Możesz się zalogować.");

      queueMicrotask(() => {
        void navigate({ to: "/auth/login" });
      });
    },
  });
};

export default useResetPassword;
