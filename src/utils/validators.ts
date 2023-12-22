import {
  length,
  max,
  max_value as maxValue,
  min,
  min_value as minValue,
  required,
  email,
  regex,
} from "@vee-validate/rules";
import { configure, defineRule } from "vee-validate";
import { localize } from "@vee-validate/i18n";

import vi from "@vee-validate/i18n/dist/locale/vi.json";
import en from "@vee-validate/i18n/dist/locale/en.json";

// Loads localized vee-validate validation messages
configure({
  generateMessage: localize({
    vi,
    en,
  }),
});

function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined || value === "") {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return false;
}

// Define the rule globally
defineRule("length", length);
defineRule("required", required);
defineRule("max", max);
defineRule("min", min);
defineRule("max_value", maxValue);
defineRule("min_value", minValue);
defineRule("regex", regex);
defineRule("email", email);

defineRule("max_digits", (value: string, length: number) => {
  if (isEmpty(value)) return true;
  return String(value).length <= Number(length);
});
