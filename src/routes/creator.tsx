import Creator from "@/pages/Creator";
import { withAuth } from "@/Common/lib/router/helpers";

export const Route = withAuth({
  path: "/creator",
  component: Creator,
});
