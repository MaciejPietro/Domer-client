import type { FieldApi } from "@tanstack/react-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useToggle } from "usehooks-ts";

const PasswordField = ({
  form,
  name,
  validators,
}: {
  form: FieldApi<any, any, any, any>;
  name: string;
  validators: any;
}) => {
  const [visible, toggleVisible] = useToggle(false);

  return (
    <form.Field name={name} validators={validators}>
      {(field) => {
        return (
          <>
            <div className="relative">
              <input
                className="input-field"
                name={field.name}
                value={field.state.value}
                type={visible ? "text" : "password"}
                onBlur={field.handleBlur}
                onChange={(e) => {
                  field.handleChange(e.target.value);
                }}
              />

              <button
                type="button"
                onClick={toggleVisible}
                className="absolute top-2 right-2.5 p-0.5 opacity-75 hover:opacity-100 transition-opacity"
              >
                {!visible && <EyeIcon className="w-4 h-4" />}
                {visible && <EyeSlashIcon className="w-4 h-4" />}
              </button>
            </div>
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

export default PasswordField;
