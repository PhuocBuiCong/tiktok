<!-- Copyright 202312 PhuocBC -->
<script setup lang="ts">
export interface Props {
  icon: string;
  spin?: boolean;
}

const { spin = false, icon } = defineProps<Props>();
</script>

<template>
  <div
    class="flex items-center justify-center h-9 w-9 rounded flex-none lg:h-10 lg:w-10"
  >
    <i
      class="fa-light text-[20px] max-h-full max-w-full"
      :class="`fa-${icon} ${spin ? 'fa-spin' : ''}`"
    />
  </div>
</template>
