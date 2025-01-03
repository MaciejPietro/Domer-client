import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toastSuccess } from "@/common/lib/toast";
import useAuthStore, { type User } from "@/Auth/authStore";
import type { ApiResponse } from "@/common/api/types";
import type { UpdateUserPayload } from "@/User/types";
import Service from "@/User/api/Service";

type UpdateUserResponse = ApiResponse & {
  status: number;
  data: User;
};

const useUpdateUser = () => {
  const { checkAuth } = useAuthStore();

  return useMutation<
    UpdateUserResponse,
    AxiosError<string, any>,
    UpdateUserPayload
  >({
    mutationKey: ["user", "update"],
    mutationFn: (values) => Service.update(values),
    onSuccess: () => {
      toastSuccess("Dane zostały zaktualizowane");
      void checkAuth();
    },
  });
};

export default useUpdateUser;
