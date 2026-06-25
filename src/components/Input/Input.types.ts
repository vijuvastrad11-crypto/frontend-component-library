export type InputState =
  | "default"
  | "focus"
  | "filled"
  | "disabled"
  | "error"
  | "success";

export interface InputProps {
  label: string;
  placeholder?: string;
  value?: string;
  state?: InputState;
  helperText?: string;
  onInput?: (value: string) => void;
}