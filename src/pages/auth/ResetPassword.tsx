import { useForm } from "@tanstack/react-form";
import { Link, useSearch } from "@tanstack/react-router";

import type { ResetPasswordPayload } from "@/Auth/types";
import { Button } from "@mantine/core";

import Layout from "@/Auth/Layout";

import PasswordInput from "@/common/components/form/fields/PasswordInput";
import FormError from "@/common/components/form/FormError";
import useResetPassword from "@/Auth/hooks/useResetPassword";
import type { ResetPasswordSearchParams } from "@/routes/auth/resetpassword";

export default function ResetPassword() {
  const search: Required<ResetPasswordSearchParams> = useSearch({
    strict: false,
  });

  const { mutateAsync, isPending, error } = useResetPassword();

  const form = useForm<{
    password: string;
    repeatPassword: string;
  }>({
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
    onSubmit: async ({ value }) => {
      const formData: ResetPasswordPayload = {
        password: value.password,
        email: search.email,
        token: search.token,
      };

      await mutateAsync(formData);
    },
  });

  return (
    <Layout title="Zmiana hasła">
      <form.Provider>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
        >
          <PasswordInput form={form} name="password" label="Nowe hasło" />

          <PasswordInput
            form={form}
            name="repeatPassword"
            label="Powtórz nowe hasło"
          />

          <div className="relative pb-10 flex flex-col mt-4">
            <Button type="submit" loading={isPending} className="min-w-full">
              Zmień hasło
            </Button>

            <FormError error={error} />
          </div>
        </form>
      </form.Provider>

      <p className="mt-10 text-center text-sm text-gray-500">
        <Link
          to="/auth/login"
          className="leading-6 text-gray-500 hover:text-gray-600"
        >
          Wróć do logowania
        </Link>
      </p>

      {/* <p className="mt-4 text-center text-xs text-gray-500">
            Chcesz przetestować aplikację?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Rozpocznij w trybie demo
            </a>
          </p> */}
    </Layout>
  );
}
