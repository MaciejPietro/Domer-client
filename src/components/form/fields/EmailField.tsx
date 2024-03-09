import type { FieldApi } from "@tanstack/react-form";

const EmailField = ({
  form,
  name,
  validators,
}: {
  form: FieldApi<any, any, any, any>;
  name: any;
  validators: any;
}) => {
  return (
    <form.Field name={name} validators={validators}>
      {(field) => {
        return (
          <>
            <input
              className="input-field"
              name={field.name}
              value={field.state.value}
              type="email"
              onBlur={field.handleBlur}
              onChange={(e) => {
                field.handleChange(e.target.value);
              }}
            />
            {field.state.meta.errors ? (
              <p className="mt-1 text-xs text-red-600">
                {field.state.meta.errors.join(", ")}
              </p>
            ) : null}
          </>
        );
      }}
    </form.Field>
  );
};

export default EmailField;
