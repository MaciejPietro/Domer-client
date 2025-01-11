import {
  ArrowDownOnSquareIcon,
  ArrowTopRightOnSquareIcon,
  LinkIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";
import Modal from "@/common/components/ui/Modal";
import { Button, CheckIcon, Collapse, Fieldset, Switch } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import FormError from "@/common/components/form/FormError";
import FormText from "@/common/components/form/fields/FormText";
import useCreateProject from "@/Projects/hooks/useCreateProject";
import {
  ProjectStatus,
  ProjectType,
  type CreateProjectPayload,
} from "@/Projects/types/api";

import { projectTypesOptions } from "../data/newProjectFormData";
import FormNumber from "@/common/components/form/fields/FormNumber";
import FormTextarea from "@/common/components/form/fields/FormTextarea";
import FormSwitch from "@/common/components/form/fields/FormSwitch";
import FormFloatingRadios from "@/common/components/form/fields/FormFloatingRadios";
import FormLinks from "@/common/components/form/fields/FormLinks";
import { HttpStatusCode } from "axios";

const NewProject = () => {
  const [active, setActive] = useState(false);
  const [hasAdditionalInfo, setHasAdditionalInfo] = useState(false);

  const { mutateAsync, isPending } = useCreateProject();

  const form = useForm({
    defaultValues: {
      name: "",
      projectType: ProjectType.Building,
      isDraft: false,
      description: "",
      usableArea: null,
      buildingArea: null,
      urls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    onSubmit: async ({ value }) => {
      const formData: CreateProjectPayload = {
        name: value.name,
        description: value.description,
        type: value.projectType,
        status: value.isDraft ? ProjectStatus.Draft : ProjectStatus.Design,
        usableArea: value.usableArea,
        buildingArea: value.buildingArea,
        urls: value.urls,
      };

      console.log("xdxd", formData);

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
        <div className="p-10">
          <div>
            <h2 className="text-xl font-bold">Stwórz nowy projekt</h2>
            <p className="text-sm text-gray-500 mt-1">
              Wypełnij wymagane pola, aby stworzyć nowy projekt.
            </p>
          </div>
          <form.Provider>
            <form
              className="flex flex-col gap-2 mt-4"
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
              }}
            >
              <Fieldset legend="Podstawowe informacje" className="space-y-4">
                <FormText
                  form={form}
                  name="name"
                  label="Nazwa projektu"
                  required="Nazwa projektu jest wymagana"
                />

                <div className="grid grid-cols-2">
                  <FormFloatingRadios
                    form={form}
                    name="projectType"
                    label="Typ budynku"
                    options={projectTypesOptions}
                    required
                  />
                </div>

                <div className="pt-2">
                  <FormSwitch
                    form={form}
                    name="isDraft"
                    label="Wersja robocza"
                  />
                </div>
              </Fieldset>

              <Switch
                className="mt-6 mb-2"
                label="Dodatkowe informacje"
                onChange={(e) => {
                  setHasAdditionalInfo(e.target.checked);
                }}
              />

              <Collapse in={hasAdditionalInfo}>
                <Fieldset>
                  <FormTextarea form={form} name="description" label="Opis" />

                  <div className="grid grid-cols-2 gap-4">
                    <FormNumber
                      form={form}
                      min={1}
                      max={1000}
                      label="Powierzchnia użytkowa"
                      name="usableArea"
                      labelIcon={<ArrowDownOnSquareIcon className="w-4 h-4" />}
                    />
                    <FormNumber
                      form={form}
                      min={1}
                      max={1000}
                      label="Powierzchnia zabudowy"
                      name="buildingArea"
                      labelIcon={
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      }
                    />
                  </div>

                  <div className="mt-2">
                    <FormLinks
                      label="Linki"
                      form={form}
                      name="urls"
                      labelIcon={<LinkIcon className="w-4 h-4" />}
                    />
                  </div>
                </Fieldset>
              </Collapse>

              <FormError error={null} />

              <div className="relative flex  space-x-4 mt-2">
                <Button
                  type="submit"
                  color="blue"
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
        </div>
      </Modal>
    </>
  );
};

export default NewProject;
