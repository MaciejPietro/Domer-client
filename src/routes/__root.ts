import type { AuthState } from "@/hooks/useAuth";

import { createRootRouteWithContext } from "@tanstack/react-router";

interface MyRouterContext {
  auth: AuthState;
}

export const Route = createRootRouteWithContext<MyRouterContext>()();
