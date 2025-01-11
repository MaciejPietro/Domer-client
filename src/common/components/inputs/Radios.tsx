import type { ValidationError } from "@tanstack/react-form";
import { useState } from "react";
import clsx from "clsx";
import FieldError from "../form/FieldError";
import CheckmarkIcon from "@/common/assets/icons/checkmark.svg?react";

export type RadioItem<T = string> = {
  name: string;
  code: T;
};

type ComponentProps<T> = {
  onChange?: (value: T) => void;
  errors?: Array<string | ValidationError>;
  options: Array<RadioItem<T>>;
  size?: "sm" | "md";
};

const Radios = <T,>({
  options,
  size = "sm",
  errors = [],
  onChange,
}: ComponentProps<T>) => {
  const [selected, setSelected] = useState<T | null>(null);

  const handleChange = (key: T) => {
    setSelected(key);
    onChange?.(key);
  };

  return (
    <div className="space-y-2">
      {options.map((item) => (
        <RadioItem<T>
          key={item.name}
          item={item}
          handleChange={handleChange}
          size={size}
          selected={selected}
        />
      ))}
      <div className="relative">{errors && <FieldError errors={errors} />}</div>
    </div>
  );
};

const RadioItem = <T,>({
  item,
  handleChange,
  size = "sm",
  selected,
}: {
  item: RadioItem<T>;
  handleChange: (key: T) => void;
  size?: "sm" | "md";
  selected: T | null;
}) => {
  return (
    <label className="flex options-center cursor-pointer">
      <input
        type="checkbox"
        onChange={() => {
          handleChange(item.code);
        }}
        className="absolute opacity-0 cursor-pointer"
      />
      <span
        className={clsx(
          "flex items-center justify-center border-2 rounded-full mr-2 size-5",

          selected === item.code
            ? "bg-blue-500 border-blue-500"
            : "border-gray-300 bg-transparent"
        )}
      >
        {selected === item.code && (
          <CheckmarkIcon className="size-3 text-white" />
        )}
      </span>
      <span
        className={clsx(
          "custom-tooltip-btn text-gray-400",
          size === "sm" ? "text-sm" : "text-basesm:text-md"
        )}
      >
        {item.name}
      </span>
    </label>
  );
};

export default Radios;
