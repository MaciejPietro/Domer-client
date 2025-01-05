import type { RegisterPayload } from "@/Auth/types";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import AuthService from "@/Auth/api/Service";
import { useNavigate } from "@tanstack/react-router";
import type { ApiResponse } from "@/common/api/types";

type RegisterResponse = ApiResponse & {
  status: number;
};

const useRegister = () => {
  const navigate = useNavigate();

  return useMutation<
    RegisterResponse,
    AxiosError<string, any>,
    RegisterPayload
  >({
    mutationKey: ["auth", "register"],
    mutationFn: AuthService.register,
    onSuccess: () => {
      queueMicrotask(() => {
        void navigate({ to: "/auth/thankyou" });
      });
    },
  });
};

export default useRegister;
