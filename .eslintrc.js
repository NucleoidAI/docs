module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  ignorePatterns: ["/node_modules", "/build"],
  rules: {
    eqeqeq: ["error", "always"],
    "no-console": "off",
    "no-eval": "error",
    "no-var": "error",
    "prefer-const": "error",
    "sort-imports": [
      "warn",
      {
        memberSyntaxSortOrder: ["none", "single", "multiple", "all"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
