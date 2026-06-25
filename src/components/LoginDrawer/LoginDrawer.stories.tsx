import type { Meta, StoryObj } from "@storybook/preact-vite";
import { LoginDrawer } from "./LoginDrawer";

const meta = {
  title: "Compositions/LoginDrawer",
  component: LoginDrawer,
  decorators: [
    (Story) => (
      <div className="bg-[var(--color-background)] p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoginDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
