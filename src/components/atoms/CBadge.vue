<!-- Copyright 202312 PhuocBC -->
<script setup lang="ts">
export interface Props {
  label: string;
}

const { label } = defineProps<Props>();
</script>

<template>
  <div
    class="inline rounded-full bg-blue-300 text-white px-2 max-w-fit min-h-fit text-xs font-bold"
  >
    {{ label }}
  </div>
</template>
