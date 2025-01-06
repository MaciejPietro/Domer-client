export type ProjectId = string;

export enum ProjectStatus {
  DESIGN = 0,
  IN_PROGRESS = 1,
  DONE = 2,
}

export type Project = {
  id: ProjectId;
  name: string;
  description: string | null;
  status: ProjectStatus;
  usableArea: number;
  buildingArea: number;
  createdAt: string;
  updatedAt: string;
};
