import Register from "@/pages/auth/Register";
import { withUnauth } from "@/Common/lib/router/helpers";

export const Route = withUnauth({
  path: "/auth/register",
  component: Register,
});
