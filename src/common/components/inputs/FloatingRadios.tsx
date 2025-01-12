import { SegmentedControl, type SegmentedControlItem } from "@mantine/core";
import type { ValidationError } from "@tanstack/react-form";
import { useState } from "react";

export type FloatingRadioItem<T = string> = {
  name: string;
  code: T;
};

type ComponentProps<T> = {
  onChange?: (value: T) => void;
  errors?: Array<string | ValidationError>;
  options: Array<FloatingRadioItem<T>>;
  size?: "sm" | "md";
  value?: T;
};

export default function FloatingRadios<T>({
  value,
  options,
  onChange,
}: ComponentProps<T>) {
  if (!options[0]) {
    throw new Error("No options provided");
  }

  console.log("xdxd vlua", value);

  const [selected, setSelected] = useState<T | null>(value ?? null);

  const handleChange = (key: T) => {
    setSelected(key);
    onChange?.(key);
  };

  return (
    <SegmentedControl
      transitionDuration={0}
      value={selected?.toString()}
      onChange={(value) => {
        handleChange(value as T);
      }}
      data={options.map(
        (option) =>
          ({
            label: option.name,
            value: option.code,
          }) as SegmentedControlItem
      )}
    />
  );
}
