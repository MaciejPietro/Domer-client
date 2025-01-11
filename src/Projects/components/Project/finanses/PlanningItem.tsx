import {
  UsersIcon,
  CogIcon,
  BoltIcon,
  WindowIcon,
  HeartIcon,
  LinkIcon,
  TrashIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import {
  Badge,
  Button,
  Checkbox,
  List,
  NumberFormatter,
  Switch,
} from "@mantine/core";

interface PlanningItemProps {
  title: string;
  description: string;
  location: string;
  features: Array<{ label: string }>;
  price: number;
}

export function PlanningItem({
  title,
  description,
  location,
  features,
  price,
}: PlanningItemProps) {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex justify-between mt-4 px-4">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="mt-2">
            <Badge size="sm" variant="light">
              <div className="flex items-center gap-1">
                <WindowIcon className="size-3" />
                {location}
              </div>
            </Badge>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 border-t border-gray-200 ">
        <div className="flex flex-col gap-2">
          <List size="xs">
            {features.map((item) => (
              <List.Item key={item.label}>{item.label}</List.Item>
            ))}
          </List>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 flex flex-col gap-2 justify-between">
        <div>
          <p className="text-xl font-semibold leading-none">
            <NumberFormatter value={price} thousandSeparator=" " />{" "}
            <span className="text-sm text-gray-500">zł</span>
          </p>
        </div>
        <div className="flex items-center justify-between gap-1">
          <Switch color="green" />
          <div>
            <Button size="xs" variant="subtle" color="red" className="!px-2">
              <HeartIcon className="size-4" />
            </Button>
            <Button size="xs" variant="subtle" color="red" className="!px-2">
              <TrashIcon className="size-4" />
            </Button>
            <Button size="xs" variant="subtle" className="!px-2">
              <LinkIcon className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
