import { create } from "zustand";
import AuthService from "@/api/AuthService";
// Define the state interface
type User = {
  email: string;
  isEmailConfirmed: boolean;
};

interface AuthState {
  user: User | null;
  isAuth: boolean;
  isPending: boolean;
  setAuth: (value: boolean) => void;
  checkAuth: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuth: false,
  isPending: true,
  setAuth: (value: boolean) => {
    console.log("xdxd set", value);

    set(() => ({ isAuth: value }));
  },
  checkAuth: async () => {
    try {
      const response = await AuthService.info();
      console.log("xdxd res", response.data);

      set(() => ({ isAuth: true, isPending: false, user: response.data }));
    } catch (error) {
      set(() => ({ isAuth: false, isPending: false }));
    }
  },
}));

export default useAuthStore;
