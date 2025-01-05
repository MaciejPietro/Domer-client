import { withAuth } from "@/common/lib/router/helpers";
import Projects from "@/Projects/pages/Projects";

export const Route = withAuth({
  path: "/projects",
  component: Projects,
});
