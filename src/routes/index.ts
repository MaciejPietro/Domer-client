import Dashboard from "../pages/Dashboard";
import { withAuth } from "@/Common/lib/router/helpers";

export const Route = withAuth({
  path: "/",
  component: Dashboard,
});
