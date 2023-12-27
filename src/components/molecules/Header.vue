<!-- Copyright 202312 by PhuocBC -->
<script setup lang="ts">
import LogoPC from "@/assets/LogoPC.png";
import CButton from "../atoms/CButton.vue";
import CIcon from "../atoms/CIcon.vue";
import { ref } from "vue";
import { useCommonStore } from "@/stores/common";

const commonStore = useCommonStore();
let isShowExpand = ref(false);
let toggleActive = ref(false);

const handleShowSideBar = () => {
  commonStore.setShowSideBar(true);
};
</script>

<template>
  <!-- Header for PC -->
  <header
    class="hidden lg:flex items-center justify-between h-16 sticky top-0 bg-white shadow-md z-20 print:static print:shadow-none px-6"
  >
    <!-- logo -->
    <div class="min-w-[300px]">
      <img :src="LogoPC" alt="" class="w-28 h-10" />
    </div>

    <!-- search -->
    <div
      class="flex flex-row items-center rounded-[92px] h-[46px] border border-solid bg-gray-100 pl-3 max-w-[500px] w-full"
    >
      <input
        type="search"
        autocomplete="off"
        aria-label="Search"
        placeholder="Search"
        class="text-base border-none bg-transparent outline-none p-0 w-full text-black appearance-none focus:ring-transparent cursor-text input-search"
      />
      <span class="w-[1px] h-[28px] my-[-3px] mx-0 bg-gray-350"></span>
      <button
        type="submit"
        class="py-[11px] outline-none border-none cursor-pointer bg-transparent px-3"
      >
        <CIcon icon="search" class="text-[24px] text-gray-300" />
      </button>
    </div>

    <!-- button -->
    <div class="flex">
      <CButton
        label="Upload"
        icon="plus"
        class="bg-transparent text-black font-bold border border-solid border-gray-200 w-[116px] icon-upload"
      />
      <CButton
        label="Log in"
        class="bg-red-150 text-white font-bold border-none w-[100px] ml-4"
      />

      <div class="relative" @mouseleave="() => (isShowExpand = false)">
        <CIcon
          icon="grip-dots-vertical"
          class="ml-3 cursor-pointer"
          @mouseover="() => (isShowExpand = true)"
        />
        <ul
          v-show="isShowExpand"
          class="bg-white shadow-md print:shadow-none absolute w-52 right-0 top-9 rounded-lg transition-opacity ease-in-out delay-150 duration-300 opacity-100 py-2"
          @mouseover="() => (isShowExpand = true)"
          @mouseleave="() => (isShowExpand = false)"
        >
          <li class="flex items-center px-2 py-[10px]">
            <CIcon icon="globe" class="mr-2 !w-5 !h-5" />
            <span> English </span>
          </li>
          <li class="flex items-center px-2 py-[10px]">
            <CIcon icon="moon" class="mr-2 !w-5 !h-5" />
            <span> Dark mode </span>
            <div
              class="w-11 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ml-5"
              :class="{ 'bg-green-100': toggleActive }"
              @click="() => (toggleActive = !toggleActive)"
            >
              <div
                class="bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out"
                :class="{ 'translate-x-4': toggleActive }"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <!-- Header for SP -->
  <header
    class="absolute top-0 left-0 right-0 z-10 flex items-center justify-between bg-transparent w-full h-11 px-3 lg:hidden"
  >
    <CIcon
      icon="bars"
      class="text-[24px] text-white"
      @click.stop="handleShowSideBar"
    />
    <div>
      <span class="text-white mr-5 font-bold">Following</span>
      <span class="text-white font-bold">For You</span>
    </div>
    <CIcon icon="search" class="text-[24px] text-white" />
  </header>
</template>
<style lang="css" scoped>
/* Delete button X when typed*/
/* Chrome/Safari/Edge/Opera */
.input-search::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  display: none;
}

/* Firefox */
.input-search::-webkit-search-decoration,
.input-search::-webkit-search-cancel-button,
.input-search::-webkit-search-results-button,
.input-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
  appearance: none;
  display: none;
}
.icon-upload :deep(svg) {
  margin-right: 8px;
}
</style>
