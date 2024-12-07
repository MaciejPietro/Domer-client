import { createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    Input: {
      styles: () => ({
        input: { marginBottom: 6 },
      }),
    },
  },
});
