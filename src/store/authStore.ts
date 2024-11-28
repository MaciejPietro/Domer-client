import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuth: false,
  setAuth: (value: boolean) => {
    console.log("xdxd set", value);

    set(() => ({ isAuth: value }));
  },
}));

export default useAuthStore;
