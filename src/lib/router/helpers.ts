import {
  createFileRoute,
  redirect,
  type FileRoutesByPath,
  type RouteComponent,
} from "@tanstack/react-router";

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
          to: "/auth/login",
        });
      }
    },
    pendingMinMs: 0,
  });
};
