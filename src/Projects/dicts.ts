import { ProjectStatus, ProjectType } from "./types/api";

export const projectStatusDict = {
  [ProjectStatus.Draft]: "Wersja robocza",
  [ProjectStatus.Archived]: "Zarchiwizowany",
  [ProjectStatus.InProgress]: "W trakcie",
  [ProjectStatus.Done]: "Zrealizowany",
  [ProjectStatus.Paused]: "Wstrzymany",
};

export const projectTypeDict = {
  [ProjectType.Other]: "Inne",
  [ProjectType.Building]: "Dom",
  [ProjectType.Home]: "Mieszkanie",
  [ProjectType.Room]: "Pomieszenie",
};
