import type { ApiResponse } from "@/Auth/types";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import AuthService from "@/Auth/api/Service";
import { toastSuccess } from "@/Common/lib/toast";
import useUser from "@/User/hooks/useUser";

const useResendEmailConfirmation = () => {
  const user = useUser();

  if (!user?.email) {
    throw new Error("User email should be available on this stage");
  }

  return useMutation<ApiResponse, AxiosError<string, any>>({
    mutationKey: ["auth", "resendEmailConfirmation"],
    mutationFn: () => AuthService.resendEmailConfirmation(user?.email),
    onSuccess: () => {
      toastSuccess("Email został wysłany ponownie.");
    },
  });
};

export default useResendEmailConfirmation;
