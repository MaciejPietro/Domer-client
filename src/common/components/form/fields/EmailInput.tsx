import type { FormApi } from "@tanstack/react-form";
import FieldError from "@/common/components/form/FieldError";

import { isValidEmail } from "@/Common/utils/helpers";
import { Input } from "@mantine/core";

type ComponentProps = {
  form: FormApi<any, undefined>;
  disabled?: boolean;
};

const EmailInput = ({ form, disabled = false }: ComponentProps) => {
  return (
    <form.Field
      name="email"
      validators={{
        onSubmit: ({ value }: { value: string }) => {
          if (!value) return "Adres email jest wymagany";
          if (!isValidEmail(value)) return "Nieprawidłowy adres email";
          return undefined;
        },
      }}
    >
      {(field) => (
        <div className="col-span-full">
          <div className="mt-2 relative">
            <Input.Wrapper
              label="Adres email"
              required
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

export default EmailInput;
