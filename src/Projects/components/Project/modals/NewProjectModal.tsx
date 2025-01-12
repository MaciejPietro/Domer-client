import { PlusIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import Modal from "@/common/components/ui/Modal";
import { Button } from "@mantine/core";
import { useForm } from "@tanstack/react-form";

import useCreateProject from "@/Projects/hooks/useCreateProject";
import { ProjectStatus, type CreateProjectPayload } from "@/Projects/types/api";

import { HttpStatusCode } from "axios";
import ProjectForm, { type ProjectFormData } from "../forms/ProjectForm";
import { getProjectFormInitData } from "@/Projects/utils/form";

const NewProjectModal = () => {
  const [active, setActive] = useState(false);

  const { mutateAsync, isPending } = useCreateProject();

  const form = useForm<ProjectFormData>({
    defaultValues: getProjectFormInitData(),
    onSubmit: async ({ value }) => {
      const formData: CreateProjectPayload = {
        name: value.name,
        description: value.description,
        type: value.type,
        status: value.isDraft ? ProjectStatus.Draft : ProjectStatus.Design,
        usableArea: value.usableArea,
        buildingArea: value.buildingArea,
        urls: value.urls,
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
        size="xl"
      >
        <div className="px-10 py-5">
          <div>
            <h2 className="text-xl font-bold">Stwórz nowy projekt</h2>
            <p className="text-sm text-gray-500 mt-1">
              Wypełnij wymagane pola, aby stworzyć nowy projekt.
            </p>
          </div>
          <ProjectForm
            form={form}
            isPending={isPending}
            handleCancel={() => {
              setActive(false);
            }}
            buttonText="Stwórz"
          />
        </div>
      </Modal>
    </>
  );
};

export default NewProjectModal;
