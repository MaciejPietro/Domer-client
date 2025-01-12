import {
  ArrowDownOnSquareIcon,
  ArrowTopRightOnSquareIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";
import { Button, CheckIcon, Collapse, Fieldset, Switch } from "@mantine/core";
import type { FormApi } from "@tanstack/react-form";
import FormError from "@/common/components/form/FormError";
import FormText from "@/common/components/form/fields/FormText";
import type { ProjectStatus, ProjectType } from "@/Projects/types/api";

import FormNumber from "@/common/components/form/fields/FormNumber";
import FormTextarea from "@/common/components/form/fields/FormTextarea";
import FormSwitch from "@/common/components/form/fields/FormSwitch";
import FormFloatingRadios from "@/common/components/form/fields/FormFloatingRadios";
import FormLinks from "@/common/components/form/fields/FormLinks";
import type { ExternalUrl } from "@/common/types/mixed";
import {
  projectStatusOptions,
  projectTypesOptions,
} from "@/Projects/data/newProjectFormData";
import FormRadio from "@/common/components/form/fields/FormRadios";

export type ProjectFormData = {
  name: string;
  type: ProjectType;
  status: ProjectStatus;
  isDraft: boolean;
  description: string;
  usableArea: number | null;
  buildingArea: number | null;
  urls: Array<ExternalUrl>;
};

type ComponentProps = {
  isPending: boolean;
  form: FormApi<ProjectFormData>;
  handleCancel: () => void;
  buttonText: string;
  extended?: boolean;
};

const ProjectForm = ({
  form,
  handleCancel,
  isPending,
  buttonText,
  extended = false,
}: ComponentProps) => {
  const [hasAdditionalInfo, setHasAdditionalInfo] = useState(false);

  return (
    <>
      <form.Provider>
        <form
          className="flex flex-col gap-2 mt-8"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
        >
          <Fieldset legend="Podstawowe informacje" className="space-y-6">
            <FormText
              form={form}
              name="name"
              label="Nazwa projektu"
              required="Nazwa projektu jest wymagana"
            />

            {extended ? (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FormRadio
                    form={form}
                    name="status"
                    label="Status projektu"
                    options={projectStatusOptions}
                    required
                  />
                </div>

                <div>
                  <FormRadio
                    form={form}
                    name="type"
                    label="Typ budynku"
                    options={projectTypesOptions}
                    required
                  />
                </div>
              </div>
            ) : (
              <>
                <FormFloatingRadios
                  form={form}
                  name="type"
                  label="Typ budynku"
                  options={projectTypesOptions}
                  required
                />

                <FormSwitch form={form} name="isDraft" label="Wersja robocza" />
              </>
            )}
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
                  labelIcon={<ArrowTopRightOnSquareIcon className="w-4 h-4" />}
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
              {buttonText}
            </Button>
            <Button variant="subtle" color="gray" onClick={handleCancel}>
              Anuluj
            </Button>
          </div>
        </form>
      </form.Provider>
    </>
  );
};

export default ProjectForm;
