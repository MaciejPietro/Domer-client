import { withAuth } from "@/common/lib/router/helpers";
import Project from "@/Projects/pages/Project";

export const Route = withAuth({
  path: "/project",
  component: Project,
});
