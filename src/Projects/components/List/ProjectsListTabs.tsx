import { ProjectStatus } from "@/Projects/types/api";
import clsx from "clsx";
import NewProjectModal from "../Project/modals/NewProjectModal";

export type TabOption = {
  name: string;
  value: string;
  statuses: Array<ProjectStatus>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const tabs: Array<TabOption> = [
  {
    name: "Aktywne",
    value: "active",
    statuses: [ProjectStatus.InProgress],
  },
  {
    name: "Nieaktywne",
    value: "inactive",
    statuses: [ProjectStatus.Paused, ProjectStatus.Done],
  },
  {
    name: "Wersja robocza",
    value: "draft",
    statuses: [ProjectStatus.Draft],
  },
  {
    name: "Zarchiwizowane",
    value: "archived",
    statuses: [ProjectStatus.Archived],
  },
];

type ComponentProps = {
  setTab: (tab: TabOption) => void;
  tab: TabOption;
};

const ProjectsListTabs = ({ setTab, tab }: ComponentProps) => {
  return (
    <div className="hidden sm:block">
      <div className="lg:px-8 flex items-end justify-between border-b border-gray-200 h-16">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tabOption) => (
            <button
              key={tabOption.value}
              className={clsx(
                tabOption === tab
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                "flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
              )}
              onClick={() => {
                setTab(tabOption);
              }}
            >
              {tabOption.name}
            </button>
          ))}
        </nav>

        <div className="pb-3">
          <NewProjectModal />
        </div>
      </div>
    </div>
  );
};

export default ProjectsListTabs;
