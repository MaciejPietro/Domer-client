import { createTheme } from "@mantine/core";

export const theme = createTheme({
  cursorType: "pointer",
  components: {
    Input: {
      styles: () => ({
        input: { marginBottom: 6 },
      }),
    },
  },
});
