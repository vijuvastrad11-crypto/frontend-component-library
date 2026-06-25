import type { DropdownProps } from "./Dropdown.types";

export function Dropdown({
  label,
  options,
  value,
  placeholder = "Select option",
  state = "default",
  disabled = false,
  onChange,
}: DropdownProps) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  const isError = state === "error";
  const isSuccess = state === "success";

  const borderClass = isError
    ? "border-[var(--color-error)]"
    : isSuccess
      ? "border-[var(--color-success)]"
      : "border-[var(--color-border)]";

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="relative">
        <select
          id={id}
          value={value ?? ""}
          disabled={disabled}
          aria-invalid={isError}
          aria-describedby={isError ? `${id}-error` : undefined}
          onChange={(e) => onChange?.(e.currentTarget.value)}
          className={`
            h-10
            w-full
            appearance-none
            border
            rounded-[4px]
            px-3
            pr-10
            text-sm

            focus:outline-none
            focus:ring-0
            focus:border-(--color-focus)

            disabled:cursor-not-allowed
            disabled:bg-(--color-disabled-bg)
            disabled:text-(--color-disabled-text)

            ${borderClass}
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        {/* arrow */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            h-2
            w-2
            rotate-45
            border-b
            border-r
            bg-(--color-background)
            border-(--color-border)

          "
        />
      </div>

      {isError && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-[10px] text-(--color-error)"
        >
          Required
        </p>
      )}
    </div>
  );
}
