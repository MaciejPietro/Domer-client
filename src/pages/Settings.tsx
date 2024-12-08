import Main from "@/Common/components/layout/Main";
import ConfirmEmailField from "@/User/components/settings/ConfirmEmailField";
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
    key: formKey,
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

              <div className="h-5 text-sm mt-2 text-red-500 block">
                {error && error?.message}
              </div>
            </div>
          </form>
        </form.Provider>
      </div>

      <div className="p-8 border-t border-gray-300">
        <ConfirmEmailField />
      </div>

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 border-t border-gray-300">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Delete account
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            No longer want to use our service? You can delete your account here.
            This action is not reversible. All information related to this
            account will be deleted permanently.
          </p>
        </div>

        <form className="flex items-start md:col-span-2">
          <button
            type="submit"
            className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400"
          >
            Yes, delete my account
          </button>
        </form>
      </div>
    </Main>
  );
};

export default Settings;
