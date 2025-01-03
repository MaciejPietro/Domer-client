import type { HttpStatusCode } from "axios";

export type ApiResponse = {
  data: string;
};

export type ApiError = {
  title: string;
  status: HttpStatusCode;
};
