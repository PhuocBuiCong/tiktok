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
    "@intlify/vue-i18n/no-raw-text": "off",
    "@intlify/vue-i18n/no-v-html": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    "vue-i18n": {
      localeDir: "src/locales/*.json",
      messageSyntaxVersion: "^9.0.0",
    },
  },
  plugins: ["simple-import-sort"],
};
