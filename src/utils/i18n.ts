/* @license Copyright 2020 Credit Engine, Inc. */
import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import vi from "@/locales/vi.json";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    vi,
  } as {},
  silentTranslationWarn: true,
  warnHtmlInMessage: "off",
});

export default i18n;
