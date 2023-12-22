/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  env: {
    "vue/setup-compiler-macros": true,
    node: true,
  },
  rules: {
    "vue/no-setup-props-destructure": "off",
    "vue/multi-word-component-names": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-irregular-whitespace": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  plugins: ["simple-import-sort"],
};
