<!-- Copyright 202312 PhuocBC -->
<script setup lang="ts">
export interface Props {
  label: string;
  icon?: string;
}

const { icon, label } = defineProps<Props>();
</script>

<template>
  <div class="flex items-center px-3 rounded-md h-9 justify-center">
    <i
      v-if="!!icon"
      class="fa-light text-[20px] max-h-full max-w-full"
      :class="`fa-${icon}`"
    />
    <span class="text-[16px]">{{ label }}</span>
  </div>
</template>
