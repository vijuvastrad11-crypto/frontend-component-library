import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  args: {
    label: "Email",
    placeholder: "Email",
    state: "default",
  },
  argTypes: {
    state: {
      control: "select",
      options: ["default", "focus", "filled", "disabled", "error", "success"],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[320px] p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
  },
};

export const Focus: Story = {
  args: {
    state: "focus",
  },
};

export const Filled: Story = {
  args: {
    state: "filled",
    value: "viju@test.com",
  },
};

export const Disabled: Story = {
  args: {
    state: "disabled",
    value: "Disabled value",
  },
};

export const Error: Story = {
  args: {
    state: "error",
    value: "wrong-email",
    helperText: "*required",
  },
};

export const Success: Story = {
  args: {
    state: "success",
    value: "viju@test.com",
    helperText: "Looks good",
  },
};
