import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Dropdown } from "./Dropdown";

const customerOptions = [
  { label: "Retail Store Owner", value: "retail" },
  { label: "Convenience Shop", value: "convenience" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Catering & Events", value: "catering" },
];

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
  args: {
    label: "Customer type",
    placeholder: "Customer type",
    options: customerOptions,
  },
  argTypes: {
    state: {
      control: "select",
      options: ["default", "focus", "selected", "opened", "error", "success"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Focus: Story = {
  args: {
    state: "focus",
  },
};

export const Selected: Story = {
  args: {
    state: "selected",
    value: "retail",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Opened: Story = {
  args: {
    state: "opened",
    value: "",
  },
};

export const Error: Story = {
  args: {
    state: "error",
    showError: true,
    errorMessage: "*required",
  },
};

export const Success: Story = {
  args: {
    state: "success",
    value: "retail",
  },
};
