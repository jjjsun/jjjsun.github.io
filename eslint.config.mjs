import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
]);
