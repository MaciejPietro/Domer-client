import Projects from "../pages/Projects";
import { withAuth } from "@/lib/router/helpers";

export const Route = withAuth({
  path: "/projects",
  component: Projects,
});
