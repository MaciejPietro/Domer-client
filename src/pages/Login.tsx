import { useForm } from "@tanstack/react-form";
import InputWrapper from "../components/form/InputWrapper";
import PasswordField from "../components/form/fields/PasswordField";
import TextField from "../components/form/fields/TextField";
import { isValidEmail } from "../utils/helpers";
import { useLogin } from "@/api/auth";
import type { LoginPayload } from "@/types/api";
import { useUser } from "@/api/user";

export default function Login() {
  const { login } = useLogin();
  const { data, refetch } = useUser();

  const form = useForm<LoginPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      const res = await login(value);

      console.log("xdxd", res.data);

      // const token = res.data;

      // window.localStorage.setItem("mytoken", `${token}`);
    },
  });
  // refetch();

  console.log("1 data", data);

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
              <InputWrapper title="Email">
                <TextField
                  name="email"
                  form={form as any}
                  validators={{
                    onBlur: ({ value }: { value: string }) => {
                      if (!isValidEmail(value)) return "Nieprawidłowy email";

                      return false;
                    },
                  }}
                />
              </InputWrapper>

              <InputWrapper title="Hasło">
                <PasswordField
                  name="password"
                  form={form as any}
                  validators={{
                    onBlur: ({ value }: { value: string }) => {
                      if (value.length) return false;

                      return "Hasło jest wymagane";
                    },
                  }}
                />
              </InputWrapper>

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
