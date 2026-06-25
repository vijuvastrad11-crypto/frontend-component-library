import type { InputProps } from "./Input.types";

export function Input({
  label,
  placeholder = "Placeholder",
  value = "",
  state = "default",
  helperText,
  onInput,
}: InputProps) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  const disabled = state === "disabled";
  const isError = state === "error";
  const isSuccess = state === "success";
  const isFilled = value.length > 0;

  const showClear =
    !disabled &&
    (state === "default" || state === "focus" || isFilled || isError);

  return (
    <div className="flex w-full flex-col gap-[3px]">

      {/* FIELDSET = BORDER + STATE OWNER */}
      <fieldset
        className={`
          relative
          h-9
          rounded-[var(--radius-sm)]
          border
          px-2
          pb-1
          bg-[var(--color-surface)]

          transition

          ${disabled ? "bg-[var(--color-surface-hover)]" : ""}

          ${isError
            ? "border-[var(--color-error)]"
            : isSuccess
              ? "border-[var(--color-success)]"
              : "border-[var(--color-border)]"
          }

          focus-within:border-[var(--color-focus)]
          focus-within:outline-none
          focus-within:ring-0
        `}
      >
        <legend
          className={`
            ml-1 px-1 text-[9px] leading-none
            ${isError
              ? "text-[var(--color-error)]"
              : "text-[var(--color-text)]"
            }
          `}
        >
          {label}
        </legend>

        {/* INPUT */}
        <input
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={isError}
          aria-describedby={isError ? `${id}-error` : undefined}
          onInput={(e) => onInput?.(e.currentTarget.value)}
          className={`
            h-[22px]
            w-full
            bg-transparent
            px-1
            pr-6
            text-[12px]

            outline-none
            appearance-none

            text-[var(--color-text)]

            placeholder:text-[var(--color-text-muted)]
            disabled:text-[var(--color-text-muted)]
          `}
        />

        {/* CLEAR BUTTON */}
        {showClear && (
          <button
            type="button"
            aria-label="Clear input"
            onClick={() => onInput?.("")}
            className={`
              absolute right-3 top-1/2 -translate-y-1/2
              text-[13px]
              cursor-pointer

              ${isError
                ? "text-[var(--color-error)]"
                : "text-[var(--color-text)]"
              }
            `}
          >
            ×
          </button>
        )}

        {/* SUCCESS ICON */}
        {isSuccess && (
          <span
            aria-hidden="true"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-success)]"
          >
            ✓
          </span>
        )}
      </fieldset>

      {/* ERROR MESSAGE (no layout shift ready) */}
      <p className="text-[10px] min-h-[12px] text-[var(--color-error)]">
        {isError ? helperText : ""}
      </p>
    </div>
  );
}