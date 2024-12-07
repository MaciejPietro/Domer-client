import Settings from "../pages/Settings";

import { withAuth } from "@/Common/lib/router/helpers";

export const Route = withAuth({
  path: "/settings",
  component: Settings,
});
