import type { ApiErrors } from "@/common/api/types";

import type { AxiosError } from "axios";

type ComponentProps = {
  error: AxiosError<ApiErrors, any> | null;
};

const FormError = ({ error }: ComponentProps) => {
  if (!error) return <div className="my-2 h-5" aria-hidden></div>;

  let errorMessage = error?.response?.data?.title;

  console.log("xdxd msg", error);

  if (!errorMessage) {
    errorMessage = error?.response?.data?.errors[0]?.errorMessage;
  }

  return (
    <div className="h-5 text-sm my-2  text-red-500 block">{errorMessage}</div>
  );
};

export default FormError;
