import type { RadioItem } from "@/common/components/inputs/Radios";
import { ProjectType } from "../types/api";
import { projectTypeDict } from "../dicts";

export const projectTypesOptions: Array<RadioItem<ProjectType>> = [
  { name: projectTypeDict[ProjectType.Building], code: ProjectType.Building },
  { name: projectTypeDict[ProjectType.Home], code: ProjectType.Home },
  { name: projectTypeDict[ProjectType.Room], code: ProjectType.Room },
  { name: projectTypeDict[ProjectType.Other], code: ProjectType.Other },
];
