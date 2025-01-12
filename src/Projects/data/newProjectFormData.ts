import type { RadioItem } from "@/common/components/inputs/Radios";
import { ProjectStatus, ProjectType } from "../types/api";
import { projectStatusDict, projectTypeDict } from "../dicts";

export const projectTypesOptions: Array<RadioItem<ProjectType>> = [
  { name: projectTypeDict[ProjectType.Building], code: ProjectType.Building },
  { name: projectTypeDict[ProjectType.Home], code: ProjectType.Home },
  { name: projectTypeDict[ProjectType.Room], code: ProjectType.Room },
  { name: projectTypeDict[ProjectType.Other], code: ProjectType.Other },
];

export const projectStatusOptions: Array<RadioItem<ProjectStatus>> = [
  { name: projectStatusDict[ProjectStatus.Draft], code: ProjectStatus.Draft },
  { name: projectStatusDict[ProjectStatus.Design], code: ProjectStatus.Design },
  {
    name: projectStatusDict[ProjectStatus.Paused],
    code: ProjectStatus.Paused,
  },
  {
    name: projectStatusDict[ProjectStatus.InProgress],
    code: ProjectStatus.InProgress,
  },
  { name: projectStatusDict[ProjectStatus.Done], code: ProjectStatus.Done },
  {
    name: projectStatusDict[ProjectStatus.Archived],
    code: ProjectStatus.Archived,
  },
];
