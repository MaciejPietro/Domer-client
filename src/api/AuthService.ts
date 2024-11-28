import type { LoginPayload } from "@/types/api";

import axiosClient from "./apiClient";

const AuthService = {
  login: (values: LoginPayload) => {
    return axiosClient
      .post("https://localhost:7123/api/identity/login", values)
      .catch(() => {
        throw new Error("Błędny email lub hasło");
      });
  },
};

export default AuthService;
