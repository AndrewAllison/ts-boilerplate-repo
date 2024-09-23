import eslintPluginPrettier from 'eslint-plugin-prettier';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      prettier: eslintPluginPrettier,
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
