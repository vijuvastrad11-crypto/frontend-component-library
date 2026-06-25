import type { Preview } from "@storybook/preact-vite";
import "../src/index.css";

import { ThemeProvider } from "../src/theme/ThemeProvider";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme",
      defaultValue: "brandA",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "brandA", title: "Brand A" },
          { value: "brandB", title: "Brand B" },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => (
      <ThemeProvider defaultTheme={context.globals.theme}>
        {Story()}
      </ThemeProvider>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
