import Project from "../pages/Project";
import { withAuth } from "@/Common/lib/router/helpers";

export const Route = withAuth({
  path: "/project",
  component: Project,
});
