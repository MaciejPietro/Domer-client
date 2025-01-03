import Dashboard from "@/pages/Dashboard";
import { withAuth } from "@/common/lib/router/helpers";

export const Route = withAuth({
  path: "/",
  component: Dashboard,
});
