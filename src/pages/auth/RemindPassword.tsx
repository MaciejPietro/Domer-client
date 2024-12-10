import useRemindPassword from "@/Auth/hooks/useRemindPassword";
import Layout from "@/Auth/Layout";
import type { RemindPasswordPayload } from "@/Auth/types";
import EmailInput from "@/Common/components/form/fields/EmailInput";
import FormError from "@/Common/components/form/FormError";
import { Button } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";

export default function RemindPassword() {
  const { mutateAsync, error, isPending } = useRemindPassword();

  const form = useForm<any>({
    defaultValues: {
      email: "",
    },
    onSubmit: ({ value }) => {
      const formData: RemindPasswordPayload = {
        email: value.email,
      };

      void mutateAsync(formData);
    },
  });

  return (
    <Layout title="Zresetuj hasło">
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

          <div className="relative pb-10 flex flex-col mt-4">
            <Button type="submit" loading={isPending} className="min-w-full">
              Wyślij link do zresetowania hasła
            </Button>

            <FormError error={error} />
          </div>
        </form>
      </form.Provider>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/auth/login">
          <Button className="min-w-full" variant="transparent" color="gray">
            Wróć do logowania
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
