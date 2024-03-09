import type { FieldApi } from "@tanstack/react-form";

const TextField = ({
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
              type="text"
              onBlur={field.handleBlur}
              onChange={(e) => {
                field.handleChange(e.target.value);
              }}
            />
            {field.state.meta.errors ? (
              <p className=" text-[11px] text-red-600 absolute">
                {field.state.meta.errors.join(", ")}
              </p>
            ) : null}
          </>
        );
      }}
    </form.Field>
  );
};

export default TextField;
