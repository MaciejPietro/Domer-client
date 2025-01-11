import type { FormApi } from "@tanstack/react-form";
import Radios, { type RadioItem } from "@/common/components/inputs/Radios";
import { Input } from "@mantine/core";
import FieldError from "../FieldError";

type ComponentProps<T> = {
  form: FormApi<any, undefined>;
  name: string;
  options: Array<RadioItem<T>>;
  required?: boolean;
  size?: "sm" | "md";
  label: string;
};

const FormRadio = <T,>({
  form,
  name,
  options,
  required = false,
  size = "sm",
  label,
}: ComponentProps<T>) => {
  return (
    <form.Field
      name={name}
      validators={{
        onSubmit: ({ value }: { value: string }) => {
          if (required && !value) return "To pole jest wymagane";
          return undefined;
        },
      }}
    >
      {(field) => (
        <div className="col-span-full">
          <div className="mt-2 relative">
            <Input.Wrapper
              label={label}
              required={!!required}
              error={
                field.state.meta.errors.length && (
                  <FieldError errors={field.state.meta.errors} />
                )
              }
            >
              <div className="relative mt-2">
                {/* <Input
                  value={field.state.value}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                  }}
                  placeholder={placeholder}
                  error={!!field.state.meta.errors.length}
                  disabled={disabled}
                /> */}
                <Radios<T>
                  size={size}
                  onChange={field.handleChange}
                  options={options}
                />
              </div>
            </Input.Wrapper>
          </div>
        </div>
      )}
    </form.Field>
  );
};

export default FormRadio;
