import { createContext } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import type { ComponentChildren } from "preact";

import { brandA } from "../tokens/themes/brandA";
import { brandB } from "../tokens/themes/brandB";
import { brandA as brandAGenerated } from "../tokens/generated/brandA.generated";
import { brandB as brandBGenerated } from "../tokens/generated/brandB.generated";

import type { ThemeName, ThemeTokens } from "../tokens/themes/theme.types";

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

type ThemeProviderProps = {
  children: ComponentChildren;
  defaultTheme?: ThemeName;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

const USE_GENERATED_TOKENS = false;

const manualThemes: Record<ThemeName, ThemeTokens> = {
  brandA,
  brandB,
};

const generatedThemes: Record<ThemeName, ThemeTokens> = {
  brandA: brandAGenerated as ThemeTokens,
  brandB: brandBGenerated as ThemeTokens,
};

const themes = USE_GENERATED_TOKENS ? generatedThemes : manualThemes;

export function ThemeProvider({
  children,
  defaultTheme = "brandA",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    const tokens = themes[theme].cssVariables;
    const root = document.documentElement;

    Object.entries(tokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    root.setAttribute("data-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
