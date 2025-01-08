import { PlusIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import Modal from "@/common/components/ui/Modal";
import { Button, CheckIcon } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import FormError from "@/common/components/form/FormError";
import TextInput from "@/common/components/form/fields/TextInput";
import useCreateProject from "@/Projects/hooks/useCreateProject";
import type { CreateProjectPayload } from "@/Projects/types/api";
import { HttpStatusCode } from "axios";

const NewProject = () => {
  const [active, setActive] = useState(false);
  const { mutateAsync, isPending } = useCreateProject();

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
    onSubmit: async ({ value }) => {
      const formData: CreateProjectPayload = {
        name: value.name,
        description: value.description,
      };

      const res = await mutateAsync(formData);

      if (res.status === HttpStatusCode.Created) {
        setActive(false);
      }
    },
  });

  return (
    <>
      <Button
        onClick={() => {
          setActive(true);
        }}
        leftSection={<PlusIcon className="size-4" />}
        variant="light"
      >
        Stwórz projekt
      </Button>
      <Modal
        withCloseButton={false}
        opened={active}
        onClose={() => {
          setActive(false);
        }}
      >
        <form.Provider>
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              void form.handleSubmit();
            }}
          >
            <TextInput
              form={form}
              name="name"
              label="Nazwa projektu"
              required="Nazwa projektu jest wymagana"
            />

            <TextInput form={form} name="description" label="Opis" />

            <FormError error={null} />

            <div className="relative flex  space-x-4 mt-2">
              <Button
                type="submit"
                color="green"
                loading={isPending}
                leftSection={<CheckIcon className="w-4 h-4" />}
              >
                Stwórz
              </Button>
              <Button
                variant="subtle"
                color="gray"
                onClick={() => {
                  setActive(false);
                }}
              >
                Anuluj
              </Button>
            </div>
          </form>
        </form.Provider>
      </Modal>
    </>
  );
};

export default NewProject;
