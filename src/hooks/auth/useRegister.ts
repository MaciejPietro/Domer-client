import type { ApiResponse, RegisterPayload } from "@/types/api";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import AuthService from "@/api/AuthService";
import { useNavigate } from "@tanstack/react-router";

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
