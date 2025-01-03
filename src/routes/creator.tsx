import Creator from "@/pages/Creator";
import { withAuth } from "@/common/lib/router/helpers";

export const Route = withAuth({
  path: "/creator",
  component: Creator,
});
