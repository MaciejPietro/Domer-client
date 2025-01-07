import { useState } from "react";
import ProjectDetails from "@/common/components/ProjectDetails";
import Main from "@/common/components/layout/Main";
import clsx from "clsx";
import { useParams } from "@tanstack/react-router";
import useProject from "../hooks/useProject";
import ProjectTabs from "../components/Project/ProjectTabs";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Project404 from "../components/Project/404";

export type Tab = "Ogólne" | "Rzuty" | "Dane techniczne";

const stats = [
  { name: "Pow. użytkowa", value: "144", unit: "m2" },
  { name: "Garaż", value: "26", unit: "m2" },
  { name: "Ogrzewanie", value: "Pompa ciepła" },
  { name: "Liczba pokoi", value: "3" },
  { name: "Piętra", value: "2" },
  { name: "Koszt SSZ", value: "290 000", unit: "zł" },
];

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

  const { data, error, status } = useProject({ projectId });

  console.log("xdxd data", status);

  const result = data?.data.result;

  const [tab, setTab] = useState<Tab>("Ogólne");

  // @ts-expect-error find why
  const isError = error?.response?.data?.status === 400;

  return (
    <Main>
      <ProjectTabs
        setTab={setTab}
        tab={tab}
        projectId={projectId}
        isLoading={status === "pending"}
        isError={isError}
      />

      {isError && <Project404 />}
      {data && (
        <>
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
            <div className="p-6">
              Dane techniczne
              <Stats />
            </div>
          ) : null}
        </>
      )}
    </Main>
  );
};

export default Projects;
