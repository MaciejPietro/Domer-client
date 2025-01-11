import { useState } from "react";
import FieldError from "../form/FieldError";
import type { ValidationError } from "@tanstack/react-form";

type ComponentProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  errors?: Array<string | ValidationError>;
  className?: string;
};

const Textarea = ({
  name,
  label,
  disabled = false,
  value = "",
  onChange,
  errors,
  className,
}: ComponentProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col relative w-full">
      <textarea
        name={name}
        value={value}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        className={`pl-4 bg-gray-100 h-40 px-3 py-3.5  border rounded-[32px] focus:outline-none ${
          errors?.length ? "border-red-500" : "border-transparent"
        } ${className}`}
        disabled={disabled}
      />
      {errors && <FieldError errors={errors} />}

      {label && !isFocused && !value && (
        <label className="absolute top-6 mt-px -translate-y-1/2 left-4 text-green-500/50 pointer-events-none">
          {label}
        </label>
      )}
    </div>
  );
};

export default Textarea;
