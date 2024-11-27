import { useForm } from "@tanstack/react-form";
import InputWrapper from "../components/form/InputWrapper";
import PasswordField from "../components/form/fields/PasswordField";
import TextField from "../components/form/fields/TextField";
import { isValidEmail } from "../utils/helpers";
import { useLogin } from "@/api/auth";
import type { LoginPayload } from "@/types/api";
import { useUser } from "@/api/user";
import { Input, PasswordInput } from "@mantine/core";

export default function Login() {
  const { loginFn } = useLogin();
  // const { data, refetch } = useUser();

  const form = useForm<LoginPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      const res = await loginFn(value);

      console.log("xdxd res", res);

      // const token = res.data;

      // window.localStorage.setItem("mytoken", `${token}`);
    },
  });
  // refetch();

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
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
              }}
            >
              <form.Field
                name="email"
                validators={{
                  onBlur: ({ value }: { value: string }) => {
                    if (!isValidEmail(value)) return "Nieprawidłowy email";

                    return false;
                  },
                }}
              >
                {(field) => {
                  return (
                    <Input.Wrapper
                      label="Hasło"
                      error={
                        field.state.meta.errors ? (
                          <span className="mt-1 block">
                            {field.state.meta.errors}
                          </span>
                        ) : null
                      }
                    >
                      <Input
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        error={Boolean(field.state.meta.errors.length)}
                      />
                    </Input.Wrapper>
                  );
                }}
              </form.Field>

              <form.Field
                name="password"
                validators={{
                  onBlur: ({ value }: { value: string }) => {
                    if (value.length) return false;

                    return "Hasło jest wymagane";
                  },
                }}
              >
                {(field) => {
                  return (
                    <Input.Wrapper
                      label="Hasło"
                      error={
                        field.state.meta.errors ? (
                          <span className="mt-1 block">
                            {field.state.meta.errors}
                          </span>
                        ) : null
                      }
                    >
                      <PasswordInput
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        error={Boolean(field.state.meta.errors.length)}
                      />
                    </Input.Wrapper>
                  );
                }}
              </form.Field>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Zaloguj się
                </button>
              </div>
            </form>
          </form.Provider>

          <p className="mt-10 text-center text-sm text-gray-500">
            Nie masz konta?{" "}
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Zarejestruj się
            </a>
          </p>

          <p className="mt-4 text-center text-xs text-gray-500">
            Chcesz przetestować aplikację?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Rozpocznij w trybie demo
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
