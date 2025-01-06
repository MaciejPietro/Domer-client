import type { HttpStatusCode } from "axios";

export type ApiResponse = {
  data: string;
};

export type ApiResultResponse<T> = {
  data: {
    result: T;
  };
};

export type ApiError = {
  title: string;
  status: HttpStatusCode;
};
