import PasswordInput from "@/Common/components/form/fields/PasswordInput";
import type { SettingsForm } from "@/pages/Settings";
import { Checkbox } from "@mantine/core";
import type { FormApi } from "@tanstack/react-form";

import { useToggle } from "usehooks-ts";

type ComponentProps = {
  form: FormApi<SettingsForm, undefined>;
};

const PasswordField = ({ form }: ComponentProps) => {
  const [isEditing, toggleEditing] = useToggle(false);

  return (
    <div className="p-4 rounded border border-gray-200 bg-gray-50">
      <Checkbox
        size="xs"
        label="Zmień hasło"
        checked={isEditing}
        onChange={toggleEditing}
        className="text-gray-600"
      />
      {isEditing && (
        <div className="mt-4 pb-4 space-y-5">
          <PasswordInput
            form={form}
            name="currentPassword"
            label="Obecne hasło"
          />

          <PasswordInput form={form} name="password" label="Nowe hasło" />

          <PasswordInput
            form={form}
            name="repeatPassword"
            label="Powtórz nowe hasło"
          />
        </div>
      )}
    </div>
  );
};

export default PasswordField;
