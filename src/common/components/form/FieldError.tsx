import type { ValidationError } from "@tanstack/react-form";

type ComponentProps = {
  errors: Array<ValidationError>;
};

const FieldError = ({ errors }: ComponentProps) => {
  return (
    <span className="absolute -mt-0.5 block text-[11px]">
      {errors.join(", ")}
    </span>
  );
};

export default FieldError;
