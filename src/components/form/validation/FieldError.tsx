import type { ValidationError } from "@tanstack/react-form";

type ComponentProps = {
  errors: Array<ValidationError>;
};

const FieldError = ({ errors }: ComponentProps) => {
  return <span className="absolute mt-0 block">{errors.join(", ")}</span>;
};

export default FieldError;
