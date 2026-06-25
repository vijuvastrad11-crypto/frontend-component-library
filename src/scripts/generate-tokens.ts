import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import raw from "../tokens/raw/figma-tokens.json";
import type { ThemeName, ThemeTokens } from "../tokens/themes/theme.types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type TokenColor = {
  value: string;
};

type TokenColorGroup = Record<string, TokenColor>;

type TokenColours = {
  Orange: TokenColorGroup;
  Black: TokenColorGroup;
  Red: TokenColorGroup;
  Green: TokenColorGroup;
  White: TokenColorGroup;
};

const colours = raw["Primitives/Default"].Colour as TokenColours;

function buildTheme(name: ThemeName, colors: TokenColours): ThemeTokens {
  return {
    name,
    cssVariables: {
      "--color-primary": colors.Orange["500"].value,
      "--color-text": colors.Black["900"].value,
      "--color-border": colors.Black["300"].value,
      "--color-error": colors.Red["500"].value,
      "--color-success": colors.Green["500"].value,
      "--color-background": colors.White["100"].value,
      "--color-surface": colors.White["200"].value,
    },
  };
}

function writeFile(
  filePath: string,
  content: ThemeTokens,
  exportName: ThemeName,
) {
  fs.writeFileSync(
    filePath,
    `export const ${exportName} = ${JSON.stringify(content, null, 2)};\n`,
  );
}

function build() {
  const brandA = buildTheme("brandA", colours);
  const brandB = buildTheme("brandB", colours);

  const outDir = path.resolve(__dirname, "../tokens/generated");

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  writeFile(path.join(outDir, "brandA.generated.ts"), brandA, "brandA");
  writeFile(path.join(outDir, "brandB.generated.ts"), brandB, "brandB");

  console.log("✅ Tokens generated successfully");
}

build();