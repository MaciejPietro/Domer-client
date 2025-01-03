import FormError from "@/common/components/form/FormError";
import Main from "@/common/components/layout/Main";
import ConfirmEmailField from "@/User/components/settings/ConfirmEmailField";
import DeleteAccount from "@/User/components/settings/DeleteAccount";
import EmailField from "@/User/components/settings/EmailField";
import PasswordField from "@/User/components/settings/PasswordField";
import useUpdateUser from "@/User/hooks/useUpdateUser";
import useUser from "@/User/hooks/useUser";
import type { UpdateUserPayload } from "@/User/types";
import { Button } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";

export type SettingsForm = {
  email: string;
  currentPassword: string;
  password: string;
  repeatPassword: string;
};

const Settings = () => {
  const user = useUser();
  const { mutateAsync, isPending, error } = useUpdateUser();
  const [formKey, setFormKey] = useState(0);

  const form = useForm<SettingsForm>({
    defaultValues: {
      email: user.email,
      currentPassword: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: async ({ value }) => {
      const formData: UpdateUserPayload = {
        id: user.id,
      };

      if (value.email !== user.email) {
        formData.email = value.email;
      }

      if (value.password && value.repeatPassword && value.currentPassword) {
        formData.currentPassword = value.currentPassword;
        formData.password = value.password;
      }

      await mutateAsync(formData);
      setFormKey((prev) => prev + 1);
      form.reset();
    },
  });

  return (
    <Main>
      <div className="px-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Ustawienia konta
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Edytuj swoje ustawienia konta.
        </p>
      </div>

      <div className="md:col-span-2 px-8 my-8">
        <form.Provider>
          <form
            key={formKey}
            className="flex flex-col gap-5 max-w-xl"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              void form.handleSubmit();
            }}
          >
            <EmailField form={form} />
            <PasswordField form={form} />

            <div className="relative pb-10 flex flex-col mt-4">
              <div>
                <form.Subscribe
                  selector={(state) => {
                    const hasDifferentEmail = state.values.email !== user.email;

                    const hasPasswordChange =
                      state.values.currentPassword &&
                      state.values.password &&
                      state.values.repeatPassword;

                    return hasDifferentEmail || hasPasswordChange;
                  }}
                  children={(canSubmit) => (
                    <Button
                      type="submit"
                      className="w-max"
                      disabled={!canSubmit}
                      loading={isPending}
                    >
                      Zapisz
                    </Button>
                  )}
                />
              </div>

              <FormError error={error} />
            </div>
          </form>
        </form.Provider>
      </div>

      <div className="p-8 border-t border-gray-300">
        <ConfirmEmailField />
      </div>

      <div className="p-8 border-t border-gray-300">
        <DeleteAccount />
      </div>
    </Main>
  );
};

export default Settings;
