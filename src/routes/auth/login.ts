import Login from "@/pages/auth/Login";
import { withUnauth } from "@/Common/lib/router/helpers";

export const Route = withUnauth({
  path: "/auth/login",
  component: Login,
});
