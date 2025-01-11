import { Textarea } from "@mantine/core";
import type { FormApi } from "@tanstack/react-form";

type ComponentProps = {
  form: FormApi<any, undefined>;
  name: string;
  label?: string;
  disabled?: boolean;
  type?: string;
  required?: boolean;
};

const FormTextarea = ({
  form,
  name,
  label,
  disabled = false,
  required = false,
}: ComponentProps) => {
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
        <div className="col-span-full mt-2 relative">
          <Textarea
            label={label}
            name={name}
            // errors={field.state.meta.errors}
            disabled={disabled}
            // type={type}
            value={field.state.value}
            onChange={(e: any) => {
              field.handleChange(e.target.value);
            }}
          />
        </div>
      )}
    </form.Field>
  );
};

export default FormTextarea;
