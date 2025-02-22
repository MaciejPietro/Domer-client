import { projectStatusDict } from "../dicts";
import { ProjectStatus } from "../types/api";

export const changeStatusOptions: Array<{
  description: string;
  items: Array<{
    label: string;
    value: ProjectStatus;
  }>;
}> = [
  {
    description: "Nieaktywne",
    items: [
      {
        label: projectStatusDict[ProjectStatus.Draft],
        value: ProjectStatus.Draft,
      },
      {
        label: projectStatusDict[ProjectStatus.Archived],
        value: ProjectStatus.Archived,
      },
    ],
  },
  {
    description: "Aktywne",
    items: [
      {
        label: projectStatusDict[ProjectStatus.Paused],
        value: ProjectStatus.Paused,
      },
      {
        label: projectStatusDict[ProjectStatus.InProgress],
        value: ProjectStatus.InProgress,
      },
      {
        label: projectStatusDict[ProjectStatus.Done],
        value: ProjectStatus.Done,
      },
    ],
  },
];
