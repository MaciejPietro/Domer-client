import { useForm } from "@tanstack/react-form";

import { isValidEmail } from "../utils/helpers";
import type { LoginPayload } from "@/types/api";
import { Button, Input, PasswordInput } from "@mantine/core";
import useLogin from "@/hooks/useLogin";
import useAuthStore from "@/store/authStore";
import { useNavigate } from "@tanstack/react-router";

export default function Login() {
  const { mutateAsync, isPending, error } = useLogin();
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  const form = useForm<LoginPayload>({
    defaultValues: {
      email: "admin@admin.pl",
      password: "House@09!",
    },
    onSubmit: async ({ value }) => {
      const res = await mutateAsync(value);

      if (res.status === 200) {
        setAuth(true);

        queueMicrotask(() => {
          void navigate({ to: "/" });
        });
      }
    },
  });

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Logowanie
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form.Provider>
            <form
              className="flex flex-col gap-7"
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
              }}
            >
              <form.Field
                name="email"
                validators={{
                  onSubmit: ({ value }: { value: string }) => {
                    return !isValidEmail(value)
                      ? "Nieprawidłowy email"
                      : undefined;
                  },
                }}
              >
                {(field) => {
                  return (
                    <Input.Wrapper
                      label="Adres email"
                      error={
                        field.state.meta.errors.length ? (
                          <span className="absolute mt-0 block">
                            {field.state.meta.errors}
                          </span>
                        ) : (
                          false
                        )
                      }
                    >
                      <Input
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);

                          field.state.meta.errors = [];
                        }}
                        error={!!field.state.meta.errors.length}
                      />
                    </Input.Wrapper>
                  );
                }}
              </form.Field>

              <form.Field
                name="password"
                validators={{
                  onSubmit: ({ value }: { value: string }) =>
                    value.length ? undefined : "Hasło jest wymagane",
                }}
              >
                {(field) => {
                  return (
                    <Input.Wrapper
                      label="Hasło"
                      error={
                        field.state.meta.errors.length ? (
                          <span className="absolute mt-1 block">
                            {field.state.meta.errors}
                          </span>
                        ) : undefined
                      }
                    >
                      <PasswordInput
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);

                          field.state.meta.errors = [];
                        }}
                        error={!!field.state.meta.errors.length}
                      />
                    </Input.Wrapper>
                  );
                }}
              </form.Field>

              <div className="relative pb-10 flex flex-col mt-4">
                <Button
                  type="submit"
                  loading={isPending}
                  className="min-w-full"
                >
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
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Zarejestruj się
            </a>
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
        </div>
      </div>
    </>
  );
}
