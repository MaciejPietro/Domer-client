import Creator from "../pages/Creator";
import { withAuth } from "@/lib/router/helpers";

export const Route = withAuth({
  path: "/creator",
  component: Creator,
});
