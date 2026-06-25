export interface DropdownOption {
  label: string;
  value: string;
}

export type DropdownState =
  | "default"
  | "focus"
  | "selected"
  | "opened"
  | "error"
  | "success";

export interface DropdownProps {
   label: string;
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  state?: DropdownState;
  showError?: boolean;
  errorMessage?: string;
  hideLabel?: boolean;
  onChange?: (value: string) => void;
}