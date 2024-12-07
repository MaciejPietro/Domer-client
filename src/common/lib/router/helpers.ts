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

export const withUnauth = (route: {
  path: keyof FileRoutesByPath;
  component: RouteComponent<any>;
  beforeLoad?: (args: { search: Record<string, string> }) => void;
}) => {
  return createFileRoute(route.path)({
    component: route.component,

    beforeLoad: ({ context, search }) => {
      route.beforeLoad?.({ search });

      if (context.auth.isAuth && route.path.includes("/auth/")) {
        throw redirect({
          to: "/",
        });
      }
    },
    pendingMinMs: 0,
  });
};
