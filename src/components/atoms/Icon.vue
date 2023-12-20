<!-- Copyright 2022 Credit Engine, Inc. -->
<script setup lang="ts">
import { watch } from "vue";

export interface Props {
  size: string;
  color: string;
  iconName: string;
}
// export interface Emits {
//   (e: "update:modelValue", value: string): void;
// }
// const emit = defineEmits<Emits>();

const { size, color, iconName } = defineProps<Props>();
</script>

<template>
  <font-awesome-icon :size="size" :icon="iconName" />
</template>
