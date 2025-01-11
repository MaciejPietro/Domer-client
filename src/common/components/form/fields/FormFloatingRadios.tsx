import type { FormApi } from "@tanstack/react-form";
import type { FloatingRadioItem } from "@/common/components/inputs/FloatingRadios";
import { Input } from "@mantine/core";
import FieldError from "../FieldError";
import FloatingRadios from "../../inputs/FloatingRadios";

type ComponentProps<T> = {
  form: FormApi<any, undefined>;
  name: string;
  options: Array<FloatingRadioItem<T>>;
  required?: boolean;
  label: string;
};

const FormFloatingRadios = <T,>({
  form,
  name,
  options,
  required = false,
  label,
}: ComponentProps<T>) => {
  return (
    <form.Field
      name={name}
      validators={{
        onSubmit: ({ value }: { value: string }) => {
          if (required && (value === undefined || value === null))
            return "To pole jest wymagane";
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
              <div className="relative mt-2 pb-1.5">
                <FloatingRadios<T>
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

export default FormFloatingRadios;
