<!-- Copyright 2022 Credit Engine, Inc. -->
<script setup lang="ts">
import Header from "@/components/molecules/Header.vue";
import Sidebar from "@/components/molecules/Sidebar.vue";
import Footer from "@/components/molecules/Footer.vue";
</script>

<template>
  <div
    id="app"
    class="bg-black min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto] lg:bg-gray-100"
  >
    <Header />
    <Sidebar />
    <main
      class="hidden lg:block w-full max-w-screen-lg px-6 pb-16 mx-auto mt-12"
    >
      <slot />
    </main>
    <main
      class="lg:hidden w-full absolute top-0 opacity-100 pointer-events-none main-content"
    >
      <slot />
    </main>
    <Footer />
  </div>
</template>
<style lang="css">
.main-content {
  height: calc(100vh - 49px);
}
</style>
