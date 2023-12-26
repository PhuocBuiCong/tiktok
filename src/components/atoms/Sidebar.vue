<!-- Copyright 202312 by PhuocBC -->
<script setup lang="ts">
import LogoPC from "@/assets/LogoPC.png";
import CButton from "./CButton.vue";
import CIcon from "./CIcon.vue";
import { ref, watch } from "vue";
</script>

<template>
  <!-- Side bar for SP -->
  <div
    class="w-72 h-16 fixed top-0 left-0 bg-white shadow-md z-20 sidebar-sp lg:none"
  >
    <div class="flex p-3 items-center">
      <CIcon icon="bars" class="text-[24px]" />
      <img :src="LogoPC" alt="" class="w-28 h-10" />
    </div>
    <div class="upper-content flex flex-row items-center">
      <div class="flex">
        <CIcon icon="house" class="text-black icon-home" />
        <span>For You</span>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.sidebar-sp {
  height: calc(100vh - 49px);
}
.icon-home :deep(svg) {
  font-size: 26px;
}
</style>
