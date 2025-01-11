import type { FormApi } from "@tanstack/react-form";
import Checkboxes from "@/common/components/inputs/Checkboxes";

type ComponentProps = {
  form: FormApi<any, undefined>;
  name: string;
  options: Array<{ name: string; code: string }>;
  required?: boolean;
  size?: "sm" | "md";
};

const FormCheckboxes = ({
  form,
  name,
  options,
  required = false,
  size = "sm",
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
          <Checkboxes
            size={size}
            errors={field.state.meta.errors}
            onChange={field.handleChange}
            options={options}
          />
        </div>
      )}
    </form.Field>
  );
};

export default FormCheckboxes;
