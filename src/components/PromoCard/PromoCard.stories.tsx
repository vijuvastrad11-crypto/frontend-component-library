import type { Meta, StoryObj } from "@storybook/preact-vite";
import { PromoCard } from "./PromoCard";

const meta = {
  title: "Components/PromoCard",
  component: PromoCard,
  args: {
    title: "Join the family.",
    buttonText: "Become a member",
  },
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PromoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
