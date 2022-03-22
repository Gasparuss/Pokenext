module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react-hooks/recommended", "next", "next/core-web-vitals", "prettier"],
  plugins: ["react-hooks", "@typescript-eslint", "prettier"],

  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },

  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prefer-const": 1,
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
  },

  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
};
