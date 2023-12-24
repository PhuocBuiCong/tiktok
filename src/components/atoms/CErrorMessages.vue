<!-- Copyright 202312 PhuocBC -->
<script setup lang="ts">
export interface Props {
  errors: string[];
}

const { errors } = defineProps<Props>();
</script>

<template>
  <ul class="mt-2">
    <li
      v-for="message in errors"
      :key="message"
      class="text-red-200 text-xs"
      v-text="message"
    />
  </ul>
</template>
