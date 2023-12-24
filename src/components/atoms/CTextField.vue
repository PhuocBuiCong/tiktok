<!-- Copyright 202312 PhuocBC -->
<script setup lang="ts">
import { watch } from "vue";

import CBadge from "@/components/atoms/CBadge.vue";
import CErrorMessages from "@/components/atoms/CErrorMessages.vue";
import { useFieldValidation } from "@/use/useValidation";
import i18n from "@/utils/i18n";

export interface Props {
  label: string;
  name: string;
  modelValue: string;
  placeholder: string;
  isDisabled?: boolean;
  maxLength?: number;
  autocomplete?: string;
  required?: boolean;
  rules?: string;
  isTextArea?: boolean;
  classTextArea?: string;
}
export interface Emits {
  (e: "update:modelValue", value: string): void;
}
const emit = defineEmits<Emits>();
const { t } = i18n.global;
const {
  label,
  name,
  modelValue,
  placeholder,
  isDisabled = false,
  maxLength,
  autocomplete = "off",
  required = false,
  rules = "",
  isTextArea = false,
  classTextArea,
} = defineProps<Props>();

const { handleInput, errors, handleChange, handleBlur, isInvalid, value } =
  useFieldValidation(name, label, rules, modelValue, emit);

watch(
  () => modelValue,
  (modelValue) => {
    console.log("value", value);
    console.log("model", modelValue);
    value.value = modelValue;
  }
);
</script>

<template>
  <div :class="{ 'has-error': isInvalid }">
    <div class="mb-2">
      <label
        class="inline text-sm lg:text-base text-gray-300"
        :class="{ 'text-red-200': isInvalid }"
        :for="name"
        v-text="label"
      />
      <CBadge v-if="required" class="ml-2" :label="t('required')" />
    </div>
    <input
      v-if="!isTextArea"
      :id="name"
      class="text-base transition duration-300 w-full text-gray-400 placeholder:text-gray-200 disabled:bg-gray-100 disabled:text-gray-300 focus:border-blue-300 focus:ring-0"
      :class="{
        'border-gray-200': !isInvalid,
        'bg-red-100 border-red-200': isInvalid,
      }"
      type="text"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :disabled="isDisabled"
      :maxlength="maxLength"
      :autocomplete="autocomplete"
      @input="handleInput"
      @change="handleChange"
      @blur="handleBlur"
    />
    <textarea
      v-else
      :id="name"
      class="text-base transition duration-300 w-full text-gray-400 placeholder:text-gray-200 disabled:bg-gray-100 disabled:text-gray-300 focus:border-blue-300 focus:ring-0 resize-none"
      :class="[
        {
          'border-gray-200': !isInvalid,
          'bg-red-100 border-red-200': isInvalid,
        },
        classTextArea,
      ]"
      type="text"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :disabled="isDisabled"
      :maxlength="maxLength"
      :autocomplete="autocomplete"
      @input="handleInput"
      @change="handleChange"
      @blur="handleBlur"
    >
    </textarea>
    <CErrorMessages v-if="isInvalid" :errors="errors" />
  </div>
</template>
