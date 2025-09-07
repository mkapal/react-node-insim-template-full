import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsEslint from "typescript-eslint";

export default defineConfig(
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          fixStyle: "inline-type-imports",
          prefer: "type-imports",
        },
      ],
      "import/consistent-type-specifier-style": ["warn", "prefer-inline"],
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": "warn",
    },
  },
  eslintConfigPrettier,
);
