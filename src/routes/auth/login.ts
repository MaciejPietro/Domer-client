import Login from "@/pages/auth/Login";
import { withUnauth } from "@/common/lib/router/helpers";

export const Route = withUnauth({
  path: "/auth/login",
  component: Login,
});
