import {
  BanknotesIcon,
  HomeIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { Skeleton, Tabs } from "@mantine/core";
import type { ProjectId } from "@/Projects/types/mixed";
import type { Tab } from "@/Projects/pages/Project";

const tabs = [
  { name: "Dane projektu", icon: <HomeIcon className="size-4" /> },
  { name: "Finanse", icon: <BanknotesIcon className="size-4" /> },
  { name: "Kreator", icon: <SquaresPlusIcon className="size-4" /> },
];

type ComponentProps = {
  setTab: (tab: Tab) => void;
  tab: Tab;
  projectId: ProjectId;
  isLoading: boolean;
  isError: boolean;
};

const ProjectTabs = ({ setTab, tab, isLoading, isError }: ComponentProps) => {
  if (isError) return <div className="h-16"></div>;

  return (
    <>
      {isLoading ? (
        <div className="flex gap-2 items-center justify-between px-6 mb-1 h-16">
          <div className="flex gap-2">
            <Skeleton height={24} mt={6} width="80px" radius="sm" />
            <Skeleton height={24} mt={6} width="160px" radius="sm" />
            <Skeleton height={24} mt={6} width="120px" radius="sm" />
          </div>

          <Skeleton height={24} mt={6} width="24" radius="sm" />
        </div>
      ) : (
        <div className="border-b border-gray-200 flex justify-between items-end h-16">
          <Tabs
            defaultValue={tab}
            radius={1}
            styles={{
              root: {
                "--tabs-list-border-size": "0px 0px 0px 0px",
              },
            }}
            onChange={(value) => {
              setTab(value);
            }}
          >
            <Tabs.List className=" border-red-500">
              {tabs.map((tab) => (
                <Tabs.Tab value={tab.name} leftSection={tab.icon}>
                  {tab.name}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default ProjectTabs;
