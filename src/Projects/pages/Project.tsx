import { useState } from "react";
import ProjectDetails from "@/common/components/ProjectDetails";
import Main from "@/common/components/layout/Main";
import { useParams } from "@tanstack/react-router";
import useProject from "../hooks/useProject";
import ProjectTabs from "../components/Project/ProjectTabs";
import Project404 from "../components/Project/404";
import ProjectFinanses from "../components/Project/ProjectFinanses";
import Creator from "../components/Project/elements/Creator";

export type Tab = "Dane projektu" | "Finanse" | "Kreator";

const Projects = () => {
  // @ts-expect-error find why
  const { projectId } = useParams({ from: "/projects/$projectId" });

  const { data, error, status } = useProject({ projectId });

  const result = data?.data.result;

  const [tab, setTab] = useState<Tab>("Dane projektu");

  // @ts-expect-error find why
  const isError = error?.response?.data?.status === 400;

  return (
    <Main withoutPadding>
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
          {tab === "Dane projektu" && result ? (
            <ProjectDetails data={result} />
          ) : null}

          {tab === "Finanse" ? <ProjectFinanses /> : null}

          {tab === "Kreator" ? <Creator /> : null}
        </>
      )}
    </Main>
  );
};

export default Projects;
