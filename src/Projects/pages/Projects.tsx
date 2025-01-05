import { useState } from "react";
import Main from "@/common/components/layout/Main";
import clsx from "clsx";
import ProjectsTable from "@/Projects/components/ProjectsTable";

const tabs = [
  { name: "Aktywne projekty", href: "#", count: "2" },
  // { name: "Wszystkie", href: "#", count: "2" },
  // { name: "Archiwum", href: "#", count: "2" },
];

const Tabs = ({ setTab, tab }: any) => {
  return (
    <div className="hidden sm:block">
      <div className="lg:px-8  border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map(({ name, count }) => (
            <button
              key={name}
              className={clsx(
                name === tab
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                "flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
              )}
              onClick={() => {
                setTab(name);
              }}
            >
              {name}
              {/* {count ? (
                <span
                  className={clsx(
                    name === tab
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-gray-100 text-gray-900",
                    "ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
                  )}
                >
                  {count}
                </span>
              ) : null} */}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default function Projects() {
  const [tab, setTab] = useState<any>("Aktywne projekty");

  return (
    <Main>
      <Tabs setTab={setTab} tab={tab} />
      <div className="py-6">
        <ProjectsTable />
      </div>
    </Main>
  );
}
