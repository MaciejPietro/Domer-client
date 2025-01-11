import { ProjectStatus, ProjectType } from "./types/api";

export const projectStatusDict = {
  [ProjectStatus.Draft]: "Wersja robocza",
  [ProjectStatus.Archived]: "Zarchiwizowany",
  [ProjectStatus.Design]: "W trakcie projektowania",
  [ProjectStatus.InProgress]: "W trakcie realizacji",
  [ProjectStatus.Done]: "Zrealizowany",
};

export const projectTypeDict = {
  [ProjectType.Other]: "Inne",
  [ProjectType.Building]: "Dom",
  [ProjectType.Home]: "Mieszkanie",
  [ProjectType.Room]: "Pomieszenie",
};
