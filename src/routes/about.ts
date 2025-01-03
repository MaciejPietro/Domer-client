import About from "@/pages/About";
import { withAuth } from "@/common/lib/router/helpers";

export const Route = withAuth({
  path: "/about",
  component: About,
});
