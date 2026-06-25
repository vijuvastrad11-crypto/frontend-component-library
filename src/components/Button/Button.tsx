import type { ButtonProps } from "./Button.types";

const variantClasses = {
  primary: `
    bg-black
    text-white
    border
    border-black
    hover:opacity-90
  `,

  secondary: `
    bg-white
    text-black
    border
    border-black
    hover:bg-gray-50
  `,

  tertiary: `
    bg-[var(--brand-tertiary)]
    text-black
    border
    border-transparent
    hover:opacity-90
  `,
};

export function Button({
  children,
  variant = "primary",
  disabled = false,
  fullWidth = false,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex
        h-10
        items-center
        justify-center
        rounded-full
        px-6
        text-sm
        font-medium
        transition-colors
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-black
        focus-visible:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${fullWidth ? "w-full" : ""}
        ${variantClasses[variant]}
      `}
    >
      {children}
    </button>
  );
}
