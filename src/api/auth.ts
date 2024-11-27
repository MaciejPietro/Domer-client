import type { ApiResponse, LoginPayload } from "@/types/api";

import { useMutation } from "@tanstack/react-query";
import axiosClient from "./apiClient";
import type { AxiosError } from "axios";
import { toastError } from "@/lib/toast";
import { loginEndpoint } from "./endpoints";

const handleError = (err: AxiosError<string, any>) => {
  if (err.response?.data) {
    const msg = err.response?.data;

    toastError(msg);
  }
};

const useLogin = () => {
  const { mutateAsync } = useMutation<
    ApiResponse,
    AxiosError<string, any>,
    LoginPayload
  >({
    mutationKey: ["auth", "login"],
    mutationFn: (values) => {
      // const values = {
      //   email: "maciej@gmail.com",
      //   password: "Secret@123",
      // };

      return axiosClient.post(loginEndpoint(), values);
    },

    onError: (error) => {
      handleError(error);
    },
  });

  return { loginFn: mutateAsync };
};

const useRegister = () => {
  const { mutateAsync } = useMutation<
    ApiResponse,
    AxiosError<string, any>,
    LoginPayload
  >({
    mutationKey: ["auth", "login"],
    mutationFn: (values) => {
      console.log("xdxd test", values);
      // const values = {
      //   email: "maciej@gmail.com",
      //   password: "Secret@123",
      // };

      // return axiosClient.post("/auth/login", values);
      return axiosClient.post("/auth/register", values);
    },

    onError: (error) => {
      handleError(error);
    },
  });

  return { register: mutateAsync };
};

export { useLogin, useRegister };
