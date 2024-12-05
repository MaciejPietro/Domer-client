import useAuthStore from "@/store/authStore";

const useUser = () => {
  const { user } = useAuthStore();

  return user;
};

export default useUser;
