import type { AuthState } from "@/Auth/hooks/useAuth";

import { createRootRouteWithContext } from "@tanstack/react-router";

interface MyRouterContext {
  auth: Pick<AuthState, "isAuth">;
}

export const Route = createRootRouteWithContext<MyRouterContext>()();
