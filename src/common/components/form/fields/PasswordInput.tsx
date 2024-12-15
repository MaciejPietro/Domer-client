import { Input, PasswordInput as MantinePasswordInput } from "@mantine/core";

import type { FormApi } from "@tanstack/react-form";
import FieldError from "@/common/components/form/FieldError";

type ComponentProps = {
  form: FormApi<any, undefined>;
  name: string;
  label: string;
};

const PasswordInput = ({ form, name, label }: ComponentProps) => {
  return (
    <form.Field
      name={name}
      validators={{
        onSubmit: ({ value }: { value: string }) => {
          if (value.length < 8) return "Hasło musi mieć conajmniej 8 znaków";

          if (
            name === "repeatPassword" &&
            value !== form.getFieldValue("password")
          )
            return "Hasła nie są takie same";

          return undefined;
        },
      }}
    >
      {(field) => (
        <Input.Wrapper
          label={label}
          required
          error={
            field.state.meta.errors.length && (
              <FieldError errors={field.state.meta.errors} />
            )
          }
        >
          <MantinePasswordInput
            value={field.state.value}
            onChange={(e) => {
              field.handleChange(e.target.value);
            }}
            error={!!field.state.meta.errors.length}
          />
        </Input.Wrapper>
      )}
    </form.Field>
  );
};

export default PasswordInput;
