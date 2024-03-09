import { createLazyFileRoute } from "@tanstack/react-router";
import Project from "../pages/Project";

export const Route = createLazyFileRoute("/project")({
  component: Project,
});
