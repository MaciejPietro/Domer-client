import type { ProjectId } from "./mixed";

export enum ProjectStatus {
  Draft = "0",
  Archived = "1",
  Design = "2",
  InProgress = "3",
  Done = "4",
}

export enum ProjectType {
  Other = "0",
  Building = "1",
  Home = "2",
  Room = "3",
}

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

export type DeleteProjectPayload = {
  projectId: ProjectId;
};

export type CreateProjectPayload = {
  name: string;
  description: string;
  type: ProjectType;
  status: ProjectStatus;
  usableArea?: number | null;
  buildingArea?: number | null;
  urls?: Array<{ name: string; url: string }>;
};
