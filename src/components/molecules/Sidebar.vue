<!-- Copyright 202312 by PhuocBC -->
<script setup lang="ts">
import LogoPC from "@/assets/LogoPC.png";
import CButton from "../atoms/CButton.vue";
import CIcon from "../atoms/CIcon.vue";
import { useCommonStore } from "@/stores/common";

const commonStore = useCommonStore();

const handleClickOutSide = () => {
  if (commonStore.isShowSidebar) {
    commonStore.setShowSideBar(false);
  }
};
</script>

<template>
  <!-- Side bar for SP -->
  <div
    v-if="commonStore.isShowSidebar"
    v-click-out-side="handleClickOutSide"
    class="w-72 h-16 fixed top-0 left-0 bg-white shadow-md z-20 sidebar-sp lg:hidden"
  >
    <div class="flex p-3 items-center">
      <CIcon icon="bars" class="text-[24px]" />
      <img :src="LogoPC" alt="" class="w-28 h-10" />
    </div>
    <div class="upper-content flex flex-col">
      <div class="flex items-center px-3 py-2">
        <CIcon icon="house" class="text-red-150 icon-home" />
        <span class="ml-3 text-xl font-bold text-red-150">For You</span>
      </div>
      <div class="flex items-center px-3 py-2">
        <CIcon icon="user-group" class="text-black icon-home" />
        <span class="ml-3 text-xl font-bold">Following</span>
      </div>
    </div>
    <CButton
      label="Log in"
      class="text-white bg-red-150 mx-3 h-12 font-bold mt-4 mb-5"
    />
    <div class="flex flex-col p-3 border-t border-solid border-gray-200">
      <span>Company</span>
      <span>About</span>
      <span>Newsroom</span>
      <span>Contact</span>
      <span>Careers</span>
    </div>
    <div class="flex flex-col p-3 border-t border-solid border-gray-200">
      <span>Programs</span>
      <span>Tiktok for Good</span>
      <span>Tikt</span>
      <span>Contact</span>
      <span>Careers</span>
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
