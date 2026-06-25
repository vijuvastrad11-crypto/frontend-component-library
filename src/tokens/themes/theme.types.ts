export type ThemeName = "brandA" | "brandB";

export interface ThemeTokens {
  name: ThemeName;
  cssVariables: Record<string, string>;
}