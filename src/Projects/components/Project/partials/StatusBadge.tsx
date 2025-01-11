import { changeStatusOptions } from "@/Projects/data/updateProjectFormData";
import { projectStatusDict } from "@/Projects/dicts";
import { ProjectStatus } from "@/Projects/types/api";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Badge, Group, Popover, Radio, Select } from "@mantine/core";
import { useState } from "react";

type ComponentProps = {
  status: ProjectStatus;
};

const statusMap = {
  [ProjectStatus.Draft]: {
    color: "gray",
    label: projectStatusDict[ProjectStatus.Draft],
  },
  [ProjectStatus.Archived]: {
    color: "red",
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
};

const StatusBadge = ({ status }: ComponentProps) => {
  const [opened, setOpened] = useState(false);

  const handleChangeStatus = (value: string | null) => {
    console.log(value);
  };

  console.log("xdxd 2", status);

  return (
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
            size="lg"
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
          {changeStatusOptions.map((option) => (
            <Radio.Group
              description={option.description}
              mb="md"
              value={status.toString()}
              onChange={handleChangeStatus}
            >
              <Group mt="xs">
                {option.items.map((item) => (
                  <Radio value={item.value} label={item.label} />
                ))}
              </Group>
            </Radio.Group>
          ))}
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default StatusBadge;
