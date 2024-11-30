import { create } from "zustand";
import AuthService from "@/api/AuthService";
// Define the state interface
interface AuthState {
  isAuth: boolean;
  isPending: boolean;
  setAuth: (value: boolean) => void;
  checkAuth: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  isPending: true,
  setAuth: (value: boolean) => {
    console.log("xdxd set", value);

    set(() => ({ isAuth: value }));
  },
  checkAuth: async () => {
    // Call your API auth check endpoint here
    try {
      const response = await AuthService.info(); // Example API call
      console.log("xdxd chec", response);
      set(() => ({ isAuth: true, isPending: false }));
    } catch (error) {
      set(() => ({ isAuth: false, isPending: false }));
    }
  },
}));

export default useAuthStore;
