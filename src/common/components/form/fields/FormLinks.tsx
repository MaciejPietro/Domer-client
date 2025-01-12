import type { FormApi } from "@tanstack/react-form";
import FieldError from "../FieldError";
import { Button, Input } from "@mantine/core";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import CustomLabel from "../CustomLabel";
import { useState } from "react";
import { MinusIcon } from "@heroicons/react/24/outline";
import type { ExternalUrl } from "@/common/types/mixed";

type ComponentProps = {
  form: FormApi<any, undefined>;
  name: string;
  label?: string;
  required?: boolean | string;
  disabled?: boolean;
  labelIcon?: React.ReactNode;
};

const FormLinks = ({
  form,
  name,
  label,
  required = false,
  disabled = false,
  labelIcon,
}: ComponentProps) => {
  const [rows, setRows] = useState<number>(
    form.state.values[name].length as number
  );

  return (
    <form.Field
      name={name}
      validators={{
        onSubmit: ({ value }: { value: Array<ExternalUrl> }) => {
          if (rows !== 0 && !value?.every((item) => item.name && item.url)) {
            return "Nazwa i url są wymagane";
          }

          if (required && value === undefined)
            return typeof required === "string"
              ? required
              : `Pole ${label} jest wymagane`;
          return undefined;
        },
      }}
    >
      {(field) => (
        <div className="mt-2 relative">
          <Input.Wrapper
            label={
              labelIcon ? (
                <CustomLabel icon={labelIcon}>{label}</CustomLabel>
              ) : (
                label
              )
            }
            required={!!required}
            error={
              field.state.meta.errors.length && (
                <FieldError errors={field.state.meta.errors} />
              )
            }
          >
            <div className="relative pb-1.5">
              {Array.from({ length: rows }).map((_, index) =>
                field.state.value[index] ? (
                  <div className="flex items-center gap-2" key={`row-${index}`}>
                    <div key={index} className="grid grid-cols-3 gap-4">
                      <Input
                        value={field.state.value[index].name}
                        onChange={(e) => {
                          const value = e.target.value;
                          const newValue = [...field.state.value];
                          console.log("xdxd", newValue);

                          newValue[index].name = value;
                          field.handleChange(newValue);
                        }}
                        placeholder="Nazwa"
                        error={!!field.state.meta.errors.length}
                        disabled={disabled}
                      />
                      <Input
                        value={field.state.value[index].url}
                        className="col-span-2"
                        onChange={(e) => {
                          const value = e.target.value;
                          const newValue = [...field.state.value];
                          newValue[index].url = value;
                          field.handleChange(newValue);
                        }}
                        placeholder="Url"
                        disabled={disabled}
                        error={!!field.state.meta.errors.length}
                      />
                    </div>
                    <Button
                      variant="subtle"
                      size="xs"
                      color="red"
                      onClick={() => {
                        const newValue = [...field.state.value];
                        newValue.splice(index, 1);
                        field.handleChange(newValue);

                        setRows(rows - 1);
                      }}
                      className="!px-2 mb-2"
                    >
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                ) : null
              )}
              <div>
                <Button
                  variant="subtle"
                  size="xs"
                  color="blue"
                  leftSection={<PlusIcon className="w-4 h-4" />}
                  onClick={() => {
                    field.handleChange([
                      ...field.state.value,
                      { name: "", url: "" },
                    ]);

                    setRows(rows + 1);
                  }}
                >
                  Dodaj {!rows ? "" : "kolejny"} link
                </Button>
              </div>
            </div>
          </Input.Wrapper>
        </div>
      )}
    </form.Field>
  );
};

export default FormLinks;
