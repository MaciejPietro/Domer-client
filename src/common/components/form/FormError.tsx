import type { AxiosError } from "axios";

type ComponentProps = {
  error: AxiosError<string, any> | null;
};

const FormError = ({ error }: ComponentProps) => {
  if (!error) return <div className="my-2 h-5" aria-hidden></div>;

  let errorMessage = error?.response?.data;

  if (!errorMessage) {
    errorMessage = error.message;
  }

  return (
    <div className="h-5 text-sm my-2  text-red-500 block">{errorMessage}</div>
  );
};

export default FormError;
