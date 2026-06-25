import { Button } from "../Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { Input } from "../Input/Input";
import { PromoCard } from "../PromoCard/PromoCard";
import type { LoginDrawerProps } from "./LoginDrawer.types";

const customerOptions = [
  { label: "Retail Store Owner", value: "retail" },
  { label: "Convenience Shop", value: "convenience" },
  { label: "Hospitality", value: "hospitality" },
];

export function LoginDrawer({ className = "" }: LoginDrawerProps) {
  return (
    <aside
      aria-labelledby="login-drawer-title"
      className={`
        w-[360px]
        rounded-[var(--radius-md)]
        bg-[var(--color-surface)]
        p-6
        text-[var(--color-text)]
        shadow-lg
        ${className}
      `}
    >
      <h2 id="login-drawer-title" className="mb-2 text-2xl font-semibold">
        Sign in
      </h2>

      <p className="mb-6 text-sm text-[var(--color-text-muted)]">
        Please enter your email for a one-time-only code.
      </p>

      <div className="space-y-4">
        <Dropdown
          label="Customer type"
          placeholder="Customer type"
          options={customerOptions}
        />

        <Input label="Email" placeholder="Enter your email" />

        <div className="space-y-3">
          <Button variant="primary" fullWidth>
            Continue
          </Button>

          <Button variant="secondary" fullWidth>
            Login with your password
          </Button>
        </div>

        <PromoCard title="Join the family." buttonText="Become a member" />
      </div>
    </aside>
  );
}
