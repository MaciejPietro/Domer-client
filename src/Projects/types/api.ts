import type { Project, ProjectId } from "./mixed";

export type PageFilter = {
  pageIndex: number;
  pageSize: number;
};

export type GetAllProjectsPayload = {
  page: PageFilter;
};

export type GetProjectPayload = {
  projectId: ProjectId;
};
