export type AuthState = {
  isAuthenticated: boolean;
};

const useAuth = () => {
  return {
    isAuthenticated: false,
  };
};

export default useAuth;
