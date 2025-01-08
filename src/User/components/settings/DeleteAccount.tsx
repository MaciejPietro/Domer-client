import { useState } from "react";
import Modal from "@/common/components/ui/Modal";
import { Button } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import PasswordInput from "@/common/components/form/fields/PasswordInput";
import useDeleteAccount from "@/User/hooks/useDeleteAccount";
import useUser from "@/User/hooks/useUser";
import FormError from "@/common/components/form/FormError";

const DeleteAccount = () => {
  const user = useUser();
  const [active, setActive] = useState(false);
  const { mutateAsync, isPending, error } = useDeleteAccount();

  const handleDelete = () => {
    // void mutateAsync();
    setActive(true);
  };

  const form = useForm<any>({
    defaultValues: {
      password: "",
    },
    onSubmit: async ({ value }) => {
      await mutateAsync({
        id: user.id,
        password: value.password,
      });
    },
  });

  return (
    <>
      <div>
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Usuń konto
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400 max-w-md">
            Nie chcesz już korzystać z naszych usług? Możesz usunąć swoje konto.
            To działanie jest nieodwracalne. Wszystkie informacje związane z tym
            kontem zostaną trwale usunięte.
          </p>
        </div>

        <div className="flex items-start md:col-span-2 mt-4">
          <Button
            color="red"
            variant="light"
            size="xs"
            loading={isPending}
            onClick={handleDelete}
          >
            Tak, usuń moje konto
          </Button>
        </div>
      </div>
      <Modal
        opened={active}
        onClose={() => {
          setActive(false);
        }}
        title="Usuń konto"
        radius="none"
        padding="xl"
      >
        <p className="text-sm text-gray-500">
          Aby usunąć swoje konto, musisz podać swoje hasło.
        </p>

        <form.Provider>
          <form
            className="flex flex-col gap-1 max-w-xl mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              void form.handleSubmit();
            }}
          >
            <PasswordInput form={form} name={"password"} label={"Hasło"} />

            <div className="relative flex flex-col mt-3">
              <FormError error={error} />

              <div className="space-x-4">
                <Button type="submit" color="red" loading={isPending}>
                  Usuń konto
                </Button>
                <Button
                  type="button"
                  variant="subtle"
                  color="gray"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Anuluj
                </Button>
              </div>
            </div>
          </form>
        </form.Provider>
      </Modal>
    </>
  );
};

export default DeleteAccount;
