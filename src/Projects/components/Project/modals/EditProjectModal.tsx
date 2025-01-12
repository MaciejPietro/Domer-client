import Modal from "@/common/components/ui/Modal";
import { useForm } from "@tanstack/react-form";

import type { UpdateProjectPayload } from "@/Projects/types/api";

import ProjectForm, { type ProjectFormData } from "../forms/ProjectForm";
import type { Project } from "@/Projects/types/mixed";
import { useMemo } from "react";
import useUpdateProject from "@/Projects/hooks/useUpdateProject";
import { HttpStatusCode } from "axios";
import { getProjectFormInitData } from "@/Projects/utils/form";

type ComponentProps = {
  project: Project;
  active: boolean;
  setActive: (active: boolean) => void;
};

const EditProjectModal = ({ project, active, setActive }: ComponentProps) => {
  const { mutateAsync, isPending } = useUpdateProject({
    projectId: project.id,
  });

  const defaultValues = useMemo(
    () => getProjectFormInitData(project),
    [project]
  );

  const form = useForm<ProjectFormData>({
    defaultValues,
    onSubmit: async ({ value }) => {
      const formData: UpdateProjectPayload = {
        name: value.name,
        description: value.description,
        type: value.type,
        status: value.status,
        usableArea: value.usableArea,
        buildingArea: value.buildingArea,
        urls: value.urls,
      };

      const res = await mutateAsync(formData);

      if (res.status === HttpStatusCode.Ok) {
        setActive(false);
      }
    },
  });

  return (
    <>
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
            <h2 className="text-xl font-bold">
              Edytuj <span className="text-blue-500">{project.name}</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Wypełnij wymagane pola, aby edytować projekt.
            </p>
          </div>
          <ProjectForm
            form={form}
            isPending={isPending}
            handleCancel={() => {
              setActive(false);
            }}
            buttonText="Edytuj"
            extended
          />
        </div>
      </Modal>
    </>
  );
};

export default EditProjectModal;
