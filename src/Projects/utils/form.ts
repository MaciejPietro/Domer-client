import type { ProjectFormData } from "../components/Project/forms/ProjectForm";
import { ProjectType, ProjectStatus } from "../types/api";
import type { Project } from "../types/mixed";

export const getProjectFormInitData = (project?: Project): ProjectFormData => {
  return {
    name: project ? project.name : "",
    type: project ? project.type : ProjectType.Building,
    status: project ? project.status : ProjectStatus.Draft,
    isDraft: project ? project.status === ProjectStatus.Draft : false,
    description: project?.description ? project.description : "",
    usableArea: project ? project.details.usableArea : null,
    buildingArea: project ? project.details.buildingArea : null,
    urls: project
      ? project.details.urls
      : [
          {
            name: "",
            url: "",
          },
        ],
  };
};
