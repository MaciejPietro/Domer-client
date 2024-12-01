import {
  createFileRoute,
  redirect,
  useRouteContext,
  type FileRoutesByPath,
  type RouteComponent,
} from "@tanstack/react-router";
import Login from "@/pages/Login";
import useAuth from "@/hooks/auth/useAuth";

export const withAuth = (route: {
  path: keyof FileRoutesByPath;
  component: RouteComponent<any>;
}) => {
  return createFileRoute(route.path)({
    component: route.component,

    // eslint-disable-next-line @typescript-eslint/require-await
    beforeLoad: ({ context }) => {
      if (!context.auth.isAuth) {
        throw redirect({
          to: "/login",
        });
      }
    },
    pendingMinMs: 0,
  });
};
