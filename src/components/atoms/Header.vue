<!-- Copyright 202312 by PhuocBC -->
<script setup lang="ts">
import LogoPC from "@/assets/LogoPC.png";
</script>

<template>
  <header
    class="h-11 lg:h-16 sticky top-0 bg-white shadow-md z-20 print:static print:shadow-none px-6 flex items-center justify-between"
  >
    <div class="min-w-[300px]">
      <img :src="LogoPC" alt="" class="w-28 h-10" />
    </div>
    <div class="max-w-[500px] w-full min-w-[200px] relative lg:flex sm:hidden">
      <input
        type="text"
        placeholder="Search"
        class="w-full rounded-[92px] px-4"
      />
      <div class="bg-gray-200 absolute top-1 h-3 w-[1px]"></div>
    </div>
    <div class="button">
      <button class="bg-gray-400 text-white">Log in</button>
    </div>
  </header>
</template>
