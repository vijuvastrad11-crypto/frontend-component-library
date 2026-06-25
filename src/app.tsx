import { useState } from "preact/hooks";

import { Button } from "./components/Button";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Input } from "./components/Input/Input";
import { PromoCard } from "./components/PromoCard/PromoCard";
import { useTheme } from "./theme";

const customerOptions = [
  { label: "Retail Store Owner", value: "retail" },
  { label: "Convenience Shop", value: "convenience" },
  { label: "Hospitality", value: "hospitality" },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function App() {
  const { theme, setTheme } = useTheme();

  const [customerType, setCustomerType] = useState("");
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const trimmedEmail = email.trim();
  const isEmailValid = emailPattern.test(trimmedEmail);

  const hasCustomerTypeError = hasSubmitted && !customerType;
  const hasEmailError = hasSubmitted && (!trimmedEmail || !isEmailValid);

  function handleContinue() {
    setHasSubmitted(true);

    const isCustomerTypeValid = Boolean(customerType);
    const isEmailValidOnSubmit = emailPattern.test(email.trim());

    if (!isCustomerTypeValid || !isEmailValidOnSubmit) {
      return;
    }

    console.log({
      customerType,
      email: trimmedEmail,
    });

    alert("Login request submitted");

    setCustomerType("");
    setEmail("");
    setHasSubmitted(false);
  }

  function handlePasswordLogin() {
    alert("Password login selected");
  }

  function handleClose() {
    alert("Close drawer");
  }

  return (
    <main className="h-screen overflow-hidden bg-[#f7f6f2] px-6 py-10 text-[var(--text-body)]">
      {" "}
      <div className="mx-auto mb-8 flex w-[360px] justify-center gap-3">
        <Button variant="secondary" onClick={() => setTheme("brandA")}>
          Brand A
        </Button>

        <Button variant="secondary" onClick={() => setTheme("brandB")}>
          Brand B
        </Button>
      </div>
      <section
        aria-labelledby="login-title"
        className="
          relative
          mx-auto
          w-90
          overflow-hidden
          border
          border-black/60
          bg-white
          px-7
          pb-10
          pt-14
          shadow-[20px_20px_40px_rgba(0,0,0,0.08)]
        "
      >
        <button
          type="button"
          aria-label="Close login drawer"
          onClick={handleClose}
          className="absolute right-7 top-6 text-2xl leading-none"
        >
          ×
        </button>

        <h1
          id="login-title"
          className="
            mb-7
            max-w-[220px]
            text-[28px]
            font-medium
            leading-[30px]
            text-[var(--brand-primary)]
          "
        >
          Log into your account
        </h1>

        <p className="mb-7 text-[12px] leading-4 text-black">
          Please enter your email for a one-time-only code
        </p>

        <div className="space-y-5">
          <Dropdown
            label="Customer type"
            placeholder="Customer type"
            options={customerOptions}
            value={customerType}
            onChange={setCustomerType}
            state={hasCustomerTypeError ? "error" : "default"}
            showError={hasCustomerTypeError}
            errorMessage="*required"
          />

          <Input
            label="Email"
            placeholder="Email"
            value={email}
            onInput={setEmail}
            state={
              hasEmailError ? "error" : trimmedEmail ? "filled" : "default"
            }
            helperText={hasEmailError ? "*required" : ""}
          />

          <div className="space-y-3 pt-1">
            <Button variant="primary" fullWidth onClick={handleContinue}>
              Continue
            </Button>

            <Button variant="secondary" fullWidth onClick={handlePasswordLogin}>
              Login with your password
            </Button>
          </div>

          <div className="pt-3">
            <PromoCard title="Join the family." buttonText="Become a member" />
          </div>
        </div>
      </section>
      <p className="mt-6 text-center text-sm text-gray-500">
        Current theme: {theme}
      </p>
    </main>
  );
}
