import useAuthStore from "@/store/authStore";

export type AuthState = {
  isAuthenticated: boolean;
};

const useAuth = () => {
  const { isAuth } = useAuthStore();

  return {
    isAuth,
  };
};

export default useAuth;
