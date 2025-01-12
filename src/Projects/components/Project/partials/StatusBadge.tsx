import { changeStatusOptions } from "@/Projects/data/updateProjectFormData";
import { projectStatusDict } from "@/Projects/dicts";
import useUpdateProject from "@/Projects/hooks/useUpdateProject";
import { ProjectStatus, type UpdateProjectPayload } from "@/Projects/types/api";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Badge, Group, type MantineSize, Popover, Radio } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

type ComponentProps = {
  status: ProjectStatus;
  size?: MantineSize;
} & (
  | { withoutForm: true; projectId?: string }
  | { withoutForm?: false; projectId: string }
);

const statusMap = {
  [ProjectStatus.Draft]: {
    color: "gray",
    label: projectStatusDict[ProjectStatus.Draft],
  },
  [ProjectStatus.Archived]: {
    color: "gray",
    label: projectStatusDict[ProjectStatus.Archived],
  },
  [ProjectStatus.Design]: {
    color: "green",
    label: projectStatusDict[ProjectStatus.Design],
  },
  [ProjectStatus.InProgress]: {
    color: "green",
    label: projectStatusDict[ProjectStatus.InProgress],
  },
  [ProjectStatus.Done]: {
    color: "green",
    label: projectStatusDict[ProjectStatus.Done],
  },
  [ProjectStatus.Paused]: {
    color: "red",
    label: projectStatusDict[ProjectStatus.Paused],
  },
};

const StatusBadge = ({
  projectId,
  status,
  size = "lg",
  withoutForm = false,
}: ComponentProps) => {
  const [opened, setOpened] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>(
    status as unknown as string
  );

  const { mutateAsync, isPending } = useUpdateProject({
    projectId: projectId!,
  });

  const handleChangeStatus = async (value: string) => {
    setSelectedStatus(value);

    const formData: UpdateProjectPayload = {
      status: +value,
    };

    await mutateAsync(formData);
  };

  return withoutForm ? (
    <Badge variant="light" size={size} color={statusMap[status].color}>
      {statusMap[status].label}
    </Badge>
  ) : (
    <div className="flex gap-2">
      <Popover
        width={300}
        position="bottom"
        withArrow
        shadow="md"
        opened={opened}
        onChange={setOpened}
      >
        <Popover.Target>
          <Badge
            variant="light"
            size={size}
            color={statusMap[status].color}
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setOpened((o) => !o);
            }}
          >
            <div className="flex gap-1 items-center font-medium capitalize">
              {statusMap[status].label}

              {opened ? (
                <ChevronUpIcon className="size-4" />
              ) : (
                <ChevronDownIcon className="size-4" />
              )}
            </div>
          </Badge>
        </Popover.Target>
        <Popover.Dropdown>
          <div className={clsx(isPending && "opacity-50 pointer-events-none")}>
            {changeStatusOptions.map((option) => (
              <Radio.Group
                description={option.description}
                mb="md"
                value={selectedStatus.toString()}
                onChange={(value) => {
                  void handleChangeStatus(value);
                }}
                key={option.description}
              >
                <Group mt="xs">
                  {option.items.map((item) => (
                    <Radio
                      value={item.value.toString()}
                      label={item.label}
                      key={item.value}
                    />
                  ))}
                </Group>
              </Radio.Group>
            ))}
          </div>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default StatusBadge;
