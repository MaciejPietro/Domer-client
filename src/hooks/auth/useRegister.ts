import type { ApiResponse, RegisterPayload } from "@/types/api";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toastSuccess } from "@/lib/toast";
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
      toastSuccess("Rejestracja przebiegła pomyślnie. Zaloguj się.");

      queueMicrotask(() => {
        void navigate({ to: "/login" });
      });
    },
  });
};

export default useRegister;
