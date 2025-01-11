import type { FormApi } from "@tanstack/react-form";
import FieldError from "@/common/components/form/FieldError";
import { Switch } from "@mantine/core";

type ComponentProps = {
  form: FormApi<any, undefined>;
  name: string;
  label: string;
  required?: boolean | string;
  disabled?: boolean;
};

const FormSwitch = ({
  form,
  name,
  label,
  required = false,
  disabled = false,
}: ComponentProps) => {
  return (
    <form.Field
      name={name}
      validators={{
        onSubmit: ({ value }: { value: boolean | undefined }) => {
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
          <Switch
            label={label}
            checked={field.state.value ?? false}
            onChange={(event) =>
              field.handleChange(event.currentTarget.checked)
            }
            error={field.state.meta.errors.length > 0}
            disabled={disabled}
            required={!!required}
          />
          {field.state.meta.errors.length > 0 && (
            <FieldError errors={field.state.meta.errors} />
          )}
        </div>
      )}
    </form.Field>
  );
};

export default FormSwitch;
