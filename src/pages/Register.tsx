import { useForm } from "@tanstack/react-form";
import InputWrapper from "../components/form/InputWrapper";
import TextField from "../components/form/fields/TextField";
import { isValidEmail } from "../utils/helpers";
import PasswordField from "../components/form/fields/PasswordField";
import { useRegister } from "@/api/auth";
import { successError } from "@/lib/toast";

const Register = () => {
  const { register } = useRegister();

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: async ({ value }) => {
      // toastError("Nazwa użytkownika musi mieć conajmniej 4 znaki");
      // console.log("submit", value);

      const res = await register(value);

      console.log("xdxd", res);

      if (res.data) {
        successError("Użytkownik stworzony");
      }

      // const token = res.data;

      // window.localStorage.setItem("mytoken", `${token}`);

      // refetch();
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
            Rejestracja
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
              <InputWrapper title="Nazwa użytkownika">
                <TextField
                  name="username"
                  form={form as any}
                  validators={{
                    onBlur: ({ value }: { value: string }) => {
                      if (value.length < 4)
                        return "Nazwa użytkownika musi mieć conajmniej 4 znaki";

                      return false;
                    },
                  }}
                />
              </InputWrapper>

              <InputWrapper title="Email">
                <TextField
                  name="email"
                  form={form as any}
                  validators={{
                    onBlur: ({ value }: { value: string }) => {
                      if (!value) return "Email jest wymagany";
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
                      if (value.length < 4)
                        return "Hasło musi mieć conajmniej 4 znaki";

                      return false;
                    },
                  }}
                />
              </InputWrapper>

              <InputWrapper title="Powtórz hasło">
                <PasswordField
                  name="repeatPassword"
                  form={form as any}
                  validators={{
                    onChange: ({ value }: { value: string }) => {
                      if (!value) return "Powtórzone hasło jest wymagane";

                      if (value !== form.getFieldValue("password"))
                        return "Hasła nie są takie same";

                      return false;
                    },
                  }}
                />
              </InputWrapper>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Zarejestruj się
                </button>
              </div>
            </form>
          </form.Provider>

          <p className="mt-10 text-center text-sm text-gray-500">
            Masz konto?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Zaloguj się
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
