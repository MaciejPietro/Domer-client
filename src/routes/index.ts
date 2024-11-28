import { createFileRoute, redirect } from "@tanstack/react-router";
import Dashboard from "../pages/Dashboard";

export const Route = createFileRoute("/")({
  beforeLoad: ({ context }) => {
    console.log("xdxd test", context.auth.isAuth);

    if (!context.auth.isAuth) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: Dashboard,
});
