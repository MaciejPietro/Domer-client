import type { ValidationError } from "@tanstack/react-form";
import { useState } from "react";
import clsx from "clsx";

interface CheckboxItem {
  name: string;
  code: string;
}

type ComponentProps = {
  onChange?: (value: string) => void;
  errors?: Array<string | ValidationError>;
  options: Array<CheckboxItem>;
  size?: "sm" | "md";
};

const CheckboxesField = ({ options, size = "sm" }: ComponentProps) => {
  const handleChange = () => {
    // TODO: implement
  };

  return (
    <div className="space-y-2">
      {options.map((item) => (
        <CheckboxItem
          key={item.name}
          item={item}
          handleChange={handleChange}
          size={size}
        />
      ))}
    </div>
  );
};

const CheckboxItem = ({
  item,
  handleChange,
  size = "sm",
}: {
  item: CheckboxItem;
  handleChange: (key: string, value: boolean) => void;
  size?: "sm" | "md";
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex options-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          handleChange(item.code, !checked);
        }}
        className="absolute opacity-0 cursor-pointer"
      />
      <span
        className={clsx(
          "flex options-center justify-center border-2 rounded mr-2",
          size === "sm" ? "min-w-[1.25rem] h-5" : "min-w-[1.75rem] h-7",
          checked
            ? "bg-green-500 border-green-500"
            : "border-gray-300 bg-transparent"
        )}
      >
        {checked && (
          <div
            className={clsx(
              size === "sm" ? "w-2.5 h-2.5" : "w-3.5 h-3.5",
              "bg-black rounded-full"
            )}
          />
        )}
      </span>
      <span
        className={clsx(
          " text-gray-400",
          size === "sm" ? "text-sm" : "text-md"
        )}
      >
        {item.name}
      </span>
    </label>
  );
};

CheckboxesField.CheckboxItem = CheckboxItem;

export default CheckboxesField;
