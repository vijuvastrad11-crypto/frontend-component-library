import type { ComponentChildren } from "preact";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export type ButtonProps = {
  children: ComponentChildren;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};