import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";

import type { LoginPayload } from "@/Auth/types";
import { Button } from "@mantine/core";
import useLogin from "@/Auth/hooks/useLogin";

import Layout from "@/Auth/Layout";

import PasswordInput from "@/Common/components/form/fields/PasswordInput";
import EmailInput from "@/Common/components/form/fields/EmailInput";

export default function Login() {
  const { mutateAsync, isPending, error } = useLogin();

  const form = useForm<LoginPayload>({
    defaultValues: {
      email: "admin@admin.pl",
      password: "House@09!",
    },
    onSubmit: ({ value }) => mutateAsync(value),
  });

  return (
    <Layout title="Logowanie">
      <form.Provider>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
        >
          <EmailInput form={form} />

          <PasswordInput form={form} name="password" label="Hasło" />

          <div className="relative pb-10 flex flex-col mt-4">
            <Button type="submit" loading={isPending} className="min-w-full">
              Zaloguj się
            </Button>

            <div className="h-5 text-sm mt-2 text-center text-red-500 block">
              {error && error?.message}
            </div>
          </div>
        </form>
      </form.Provider>

      <p className="mt-10 text-center text-sm text-gray-500">
        Nie masz konta?
        <Link
          to="/auth/register"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Zarejestruj się
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
