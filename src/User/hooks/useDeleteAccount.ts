import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toastSuccess } from "@/common/lib/toast";
import useAuthStore from "@/Auth/authStore";
import type { ApiResponse } from "@/common/api/types";
import type { DeleteAccountPayload } from "@/User/types";
import Service from "@/User/api/Service";
import { useNavigate } from "@tanstack/react-router";

const useDeleteAccount = () => {
  const { setUser, setAuth } = useAuthStore();
  const navigate = useNavigate();

  return useMutation<
    ApiResponse,
    AxiosError<string, any>,
    DeleteAccountPayload
  >({
    mutationKey: ["user", "delete"],
    mutationFn: Service.delete,
    onSuccess: () => {
      toastSuccess("Twoje konto zostało usunięte");

      setUser(null);
      setAuth(false);

      queueMicrotask(() => {
        void navigate({ to: "/auth/login" });
      });
    },
  });
};

export default useDeleteAccount;
