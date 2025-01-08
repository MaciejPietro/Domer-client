import type { FormApi } from "@tanstack/react-form";
import FieldError from "@/common/components/form/FieldError";
import { Input } from "@mantine/core";

type ComponentProps = {
  form: FormApi<any, undefined>;
  name: string;
  label: string;
  required?: boolean | string;
  placeholder?: string;
  disabled?: boolean;
};

const TextInput = ({
  form,
  name,
  label,
  required = false,
  placeholder,
  disabled = false,
}: ComponentProps) => {
  return (
    <form.Field
      name={name}
      validators={{
        onSubmit: ({ value }: { value: string }) => {
          if (required && !value)
            return typeof required === "string"
              ? required
              : `Pole ${label} jest wymagane`;
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
              <div className="relative">
                <Input
                  value={field.state.value}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                  }}
                  placeholder={placeholder}
                  error={!!field.state.meta.errors.length}
                  disabled={disabled}
                />
              </div>
            </Input.Wrapper>
          </div>
        </div>
      )}
    </form.Field>
  );
};

export default TextInput;
