import useAuthStore from "@/store/authStore";

import { useEffect } from "react";

export type AuthState = {
  isAuth: boolean;
  isPending: boolean;
};

const useAuth = () => {
  const { isAuth, isPending, checkAuth } = useAuthStore();

  useEffect(() => {
    if (isPending) {
      void checkAuth();
    }
  }, [checkAuth, isPending]);

  // const checkAuth = useMutation<ApiResponse, AxiosError<string, any>>({
  //   mutationKey: ["auth", "check"],
  //   mutationFn: AuthService.info,
  // });

  return {
    isAuth,
    isPending,
  };
};

export default useAuth;
