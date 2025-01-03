import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

import { Toaster } from "react-hot-toast";
import { MantineProvider } from "@mantine/core";
import useAuth from "@/Auth/hooks/useAuth";
import { theme } from "@/common/lib/mantine";
import { router } from "@/common/lib/router/index.ts";

const queryClient = new QueryClient();

const App = () => {
  const { isAuth, isPending } = useAuth();

  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {isPending ? null : (
          <RouterProvider router={router} context={{ auth: { isAuth } }} />
        )}
        <Toaster position="top-right" />
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;
