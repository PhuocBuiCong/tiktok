import { useField } from "vee-validate";
import { type ComputedRef, type Ref, computed } from "vue";

export interface Emits {
  (e: "update:modelValue", value: string): void;
}

export const useFieldValidation = (
  name: string,
  label: string,
  rules: string,
  modelValue: string,
  emitter?: Emits
): {
  value: Ref<string>;
  errors: Ref<string[]>;
  isInvalid: ComputedRef<boolean>;
  handleInput: (e: Event) => void;
  handleChange: (e: Event | string | boolean, shouldValidate?: boolean) => void;
  handleBlur: (e: Event) => void;
} => {
  const {
    value,
    errors,
    handleChange,
    handleBlur: fieldHandleBlur,
  } = useField<string>(name, rules, {
    label: label,
    initialValue: modelValue,
    validateOnValueUpdate: false,
    validateOnMount: !!modelValue,
    bails: false,
  });

  const isInvalid = computed(() => {
    return errors.value.length > 0;
  });

  const handleInput = (e: Event) => {
    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement
    ) {
      if (emitter) {
        emitter("update:modelValue", e.target.value);
      }
      handleChange(e, errors.value.length > 0);
    }
  };

  const handleBlur = (e: Event) => {
    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement
    ) {
      fieldHandleBlur(e);
      handleChange(e, true);
    }
  };
  return {
    value,
    errors,
    isInvalid,
    handleInput,
    handleChange,
    handleBlur,
  };
};

export const useDomErrors = () => {
  const handleScrollToError = (document: Document) => {
    const firstError = document.getElementsByClassName("has-error")[0];
    if (!firstError) return;
    firstError.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return { handleScrollToError };
};
