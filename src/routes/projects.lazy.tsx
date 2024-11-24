import { createLazyFileRoute } from "@tanstack/react-router";
import Projects from "../pages/Projects";

export const Route = createLazyFileRoute("/projects")({
  component: Projects,
});
