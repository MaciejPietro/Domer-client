import type { RemindPasswordPayload } from "@/Auth/types";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import AuthService from "@/Auth/api/Service";
import type { ApiResponse } from "@/Common/api/types";
import { useNavigate } from "@tanstack/react-router";

const useRemindPassword = () => {
  //
  const navigate = useNavigate();

  return useMutation<
    ApiResponse,
    AxiosError<string, any>,
    RemindPasswordPayload
  >({
    mutationKey: ["auth", "remindpassword"],
    mutationFn: AuthService.remindPassword,
    onSuccess: () => {
      void navigate({ to: "/auth/resetpasswordsent" });
    },
  });
};

export default useRemindPassword;
