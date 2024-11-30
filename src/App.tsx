import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, type createRouter } from "@tanstack/react-router";
import type { FunctionComponent } from "./common/types";
// import { TanStackRouterDevelopmentTools } from "./components/utils/development-tools/TanStackRouterDevelopmentTools";
import { Toaster } from "react-hot-toast";
import { createTheme, MantineProvider } from "@mantine/core";
import useAuth from "@/hooks/auth/useAuth";

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createRouter> };

const theme = createTheme({
  /** Your theme override here */
  components: {
    Input: {
      styles: (theme) => ({
        input: { marginBottom: 6 },
      }),
    },
  },
});

const App = ({ router }: AppProps): FunctionComponent => {
  const { isAuth, isPending } = useAuth();

  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {isPending ? null : (
          <RouterProvider router={router} context={{ auth: { isAuth } }} />
        )}
        {/* <TanStackRouterDevelopmentTools
				router={router}
				initialIsOpen={false}
				position="bottom-right"
			/>
			<ReactQueryDevtools initialIsOpen={false} /> */}
        <Toaster position="top-right" />
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;
