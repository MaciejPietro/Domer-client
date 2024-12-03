import { useForm } from "@tanstack/react-form";
import { Button, Input, PasswordInput } from "@mantine/core";
import { isValidEmail } from "../utils/helpers";
import FieldError from "@/components/form/validation/FieldError";
import useRegister from "@/hooks/auth/useRegister";
import type { RegisterPayload } from "@/types/api";

export default function Register() {
  const { mutateAsync, isPending, error } = useRegister();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: async ({ value }) => {
      const formData: RegisterPayload = {
        email: value.email,
        password: value.password,
      };

      await mutateAsync(formData);
    },
  });

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/logo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Rejestracja
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form.Provider>
          <form
            className="flex flex-col gap-5"
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
                  if (!value) return "Adres email jest wymagany";
                  if (!isValidEmail(value)) return "Nieprawidłowy email";
                  return undefined;
                },
              }}
            >
              {(field) => (
                <Input.Wrapper
                  label="Adres email"
                  required
                  error={
                    field.state.meta.errors.length && (
                      <FieldError errors={field.state.meta.errors} />
                    )
                  }
                >
                  <Input
                    value={field.state.value}
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                    }}
                    error={!!field.state.meta.errors.length}
                  />
                </Input.Wrapper>
              )}
            </form.Field>

            <form.Field
              name="password"
              validators={{
                onSubmit: ({ value }: { value: string }) => {
                  if (value.length < 8)
                    return "Hasło musi mieć conajmniej 8 znaków";
                  return undefined;
                },
              }}
            >
              {(field) => (
                <Input.Wrapper
                  label="Hasło"
                  required
                  error={
                    field.state.meta.errors.length && (
                      <FieldError errors={field.state.meta.errors} />
                    )
                  }
                >
                  <PasswordInput
                    value={field.state.value}
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                    }}
                    error={!!field.state.meta.errors.length}
                  />
                </Input.Wrapper>
              )}
            </form.Field>

            <form.Field
              name="repeatPassword"
              validators={{
                onChange: ({ value }: { value: string }) => {
                  if (!value) return "Powtórzone hasło jest wymagane";
                  if (value !== form.getFieldValue("password"))
                    return "Hasła nie są takie same";
                  return undefined;
                },
              }}
            >
              {(field) => (
                <Input.Wrapper
                  label="Powtórz hasło"
                  required
                  error={
                    field.state.meta.errors.length && (
                      <FieldError errors={field.state.meta.errors} />
                    )
                  }
                >
                  <PasswordInput
                    value={field.state.value}
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                    }}
                    error={!!field.state.meta.errors.length}
                  />
                </Input.Wrapper>
              )}
            </form.Field>

            <div className="relative pb-10 flex flex-col mt-4">
              <Button type="submit" loading={isPending} className="min-w-full">
                Zarejestruj się
              </Button>

              <div className="h-5 text-sm mt-2 text-center text-red-500 block">
                {error && error?.message}
              </div>
            </div>
          </form>
        </form.Provider>

        <p className="mt-10 text-center text-sm text-gray-500 flex gap-2 justify-center items-center">
          Masz konto?
          <a
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Zaloguj się
          </a>
        </p>
      </div>
    </div>
  );
}
