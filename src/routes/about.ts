import About from "@/pages/About";
import { withAuth } from "@/Common/lib/router/helpers";

export const Route = withAuth({
  path: "/about",
  component: About,
});
