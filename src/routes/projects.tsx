import Projects from "@/pages/Projects";
import { withAuth } from "@/common/lib/router/helpers";

export const Route = withAuth({
  path: "/projects",
  component: Projects,
});
