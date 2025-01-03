import type { ApiError } from "@/common/api/types";

import type { AxiosError } from "axios";

type ComponentProps = {
  error: AxiosError<ApiError, any> | null;
};

const FormError = ({ error }: ComponentProps) => {
  if (!error) return <div className="my-2 h-5" aria-hidden></div>;

  const errorMessage = error?.response?.data?.title;

  return (
    <div className="h-5 text-sm my-2  text-red-500 block">{errorMessage}</div>
  );
};

export default FormError;
