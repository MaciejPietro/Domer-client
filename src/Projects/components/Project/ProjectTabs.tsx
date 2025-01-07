import {
  HomeIcon,
  SquaresPlusIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { Skeleton, Tabs } from "@mantine/core";
import DeleteProject from "./DeleteProject";
import type { ProjectId } from "@/Projects/types/mixed";
import type { Tab } from "@/Projects/pages/Project";
import ProjectMenu from "./ProjectMenu";

const tabs = [
  { name: "Ogólne", icon: <HomeIcon className="size-4" /> },
  { name: "Dane techniczne", icon: <WrenchIcon className="size-4" /> },
  { name: "Kreator", icon: <SquaresPlusIcon className="size-4" /> },
];

type ComponentProps = {
  setTab: (tab: Tab) => void;
  tab: Tab;
  projectId: ProjectId;
  isLoading: boolean;
  isError: boolean;
};

const ProjectTabs = ({
  setTab,
  tab,
  projectId,
  isLoading,
  isError,
}: ComponentProps) => {
  if (isError) return <div className="h-11"></div>;

  return (
    <>
      {isLoading ? (
        <div className="flex gap-2 items-center justify-between px-6 mb-1 h-10">
          <div className="flex gap-2">
            <Skeleton height={24} mt={6} width="80px" radius="sm" />
            <Skeleton height={24} mt={6} width="160px" radius="sm" />
            <Skeleton height={24} mt={6} width="120px" radius="sm" />
          </div>

          <Skeleton height={24} mt={6} width="24" radius="sm" />
        </div>
      ) : (
        <div className="border-b border-gray-200 flex justify-between items-end h-10">
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
          <div>
            <ProjectMenu projectId={projectId} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectTabs;
