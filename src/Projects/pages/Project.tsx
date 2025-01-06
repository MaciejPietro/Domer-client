import { useState } from "react";
import ProjectDetails from "@/common/components/ProjectDetails";
import Main from "@/common/components/layout/Main";
import clsx from "clsx";
import { useParams } from "@tanstack/react-router";
import useProject from "../hooks/useProject";

type Tab = "Ogólne" | "Rzuty" | "Dane techniczne";

const tabs = [
  { name: "Ogólne" },
  { name: "Dane techniczne" },
  { name: "Kreator" },
];

const stats = [
  { name: "Pow. użytkowa", value: "144", unit: "m2" },
  { name: "Garaż", value: "26", unit: "m2" },
  { name: "Ogrzewanie", value: "Pompa ciepła" },
  { name: "Liczba pokoi", value: "3" },
  { name: "Piętra", value: "2" },
  { name: "Koszt SSZ", value: "290 000", unit: "zł" },
];

const Tabs = ({ setTab, tab }: any) => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          defaultValue={tab}
          onChange={(e) => {
            setTab(e.target.value);
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
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
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-6">
      {stats.map((stat, statIdx) => (
        <div
          key={stat.name}
          className={clsx(
            statIdx % 2 === 1
              ? "sm:border-l"
              : statIdx === 2
                ? "lg:border-l"
                : "",
            "border-t border-white/5 py-6"
          )}
        >
          <p className="text-xs font-medium text-gray-700">{stat.name}</p>
          <p className="mt-2 flex items-baseline gap-x-2">
            <span className="text-xl font-semibold tracking-tight text-gray-700">
              {stat.value}
            </span>
            {stat.unit ? (
              <span className="text-sm text-gray-400">{stat.unit}</span>
            ) : null}
          </p>
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  // @ts-expect-error find why
  const { projectId } = useParams({ from: "/projects/$projectId" });

  const { data } = useProject({ projectId });

  console.log("xdxd data", data?.data.result);

  const result = data?.data.result;

  const [tab, setTab] = useState<Tab>("Ogólne");

  return (
    <Main>
      <Tabs setTab={setTab} tab={tab} />

      {tab === "Ogólne" && result ? <ProjectDetails data={result} /> : null}
      {tab === "Rzuty" ? (
        <div>
          Rzuty
          <img
            src=" https://i.wpimg.pl/c/4000x/wpcdn.pl/extradom/designs/72062/586771/cd35fc79ce81fbeea3988df6cee4d4e871797fc73c35235ae0aafba3d9af9fc6.png"
            alt=""
          />
        </div>
      ) : null}

      {tab === "Dane techniczne" ? (
        <div>
          Dane techniczne
          <Stats />
        </div>
      ) : null}
    </Main>
  );
};

export default Projects;
