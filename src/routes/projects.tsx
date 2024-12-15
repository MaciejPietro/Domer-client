import Projects from "@/pages/Projects";
import { withAuth } from "@/Common/lib/router/helpers";

export const Route = withAuth({
  path: "/projects",
  component: Projects,
});
