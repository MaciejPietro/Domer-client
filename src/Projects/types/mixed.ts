import type { ExternalUrl } from "@/common/types/mixed";
import type { ProjectStatus, ProjectType } from "./api";

export type ProjectId = string;

export type ProjectDetails = {
  usableArea: number;
  buildingArea: number;
  urls: Array<ExternalUrl>;
};

export type Project = {
  id: ProjectId;
  name: string;
  description: string | null;
  status: ProjectStatus;
  type: ProjectType;
  details: ProjectDetails;
};
