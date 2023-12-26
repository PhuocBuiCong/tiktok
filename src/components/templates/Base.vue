<!-- Copyright 2022 Credit Engine, Inc. -->
<script setup lang="ts">
import Header from "@/components/atoms/Header.vue";
import Sidebar from "@/components/atoms/Sidebar.vue";
</script>

<template>
  <div
    id="app"
    class="bg-black min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto] lg:bg-gray-100"
  >
    <Header />
    <Sidebar />
    <main class="w-full max-w-screen-lg px-6 pb-16 lg:mx-auto mt-8 lg:mt-12">
      <slot />
    </main>
  </div>
</template>
