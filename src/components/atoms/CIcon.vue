<!-- Copyright 2022 Credit Engine, Inc. -->
<script setup lang="ts">
export interface Props {
  icon: string;
  color?: string;
  spin?: boolean;
}

const { spin = false, icon } = defineProps<Props>();
</script>

<template>
  <div
    class="flex items-center justify-center h-9 w-9 mr-2 rounded flex-none lg:h-10 lg:w-10"
  >
    <i
      class="fa-light text-[20px] max-h-full max-w-full"
      :class="`fa-${icon} ${spin ? 'fa-spin' : ''}`"
    />
  </div>
</template>
