import type { FormApi } from "@tanstack/react-form";
import FieldError from "@/common/components/form/FieldError";
import { Input, NumberInput } from "@mantine/core";
import CustomLabel from "../CustomLabel";

type ComponentProps = {
  form: FormApi<any, undefined>;
  name: string;
  label: string;
  required?: boolean | string;
  placeholder?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  labelIcon?: React.ReactNode;
};

const FormNumber = ({
  form,
  name,
  label,
  required = false,
  placeholder,
  disabled = false,
  min = -Infinity,
  max = Infinity,
  labelIcon,
}: ComponentProps) => {
  return (
    <form.Field
      name={name}
      validators={{
        onSubmit: ({ value }: { value: number | undefined }) => {
          if (required && value === undefined)
            return typeof required === "string"
              ? required
              : `Pole ${label} jest wymagane`;
          return undefined;
        },
      }}
    >
      {(field) => (
        <div className="mt-2 relative">
          <Input.Wrapper
            label={
              labelIcon ? (
                <CustomLabel icon={labelIcon}>{label}</CustomLabel>
              ) : (
                label
              )
            }
            required={!!required}
            error={
              field.state.meta.errors.length && (
                <FieldError errors={field.state.meta.errors} />
              )
            }
          >
            <div className="relative">
              <NumberInput
                value={field.state.value ?? ""}
                onChange={field.handleChange}
                placeholder={placeholder}
                error={!!field.state.meta.errors.length}
                disabled={disabled}
                min={min}
                max={max}
              />
            </div>
          </Input.Wrapper>
        </div>
      )}
    </form.Field>
  );
};

export default FormNumber;
