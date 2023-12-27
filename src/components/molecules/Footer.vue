<!-- Copyright 202312 by PhuocBC -->
<script setup lang="ts">
import CIcon from "../atoms/CIcon.vue";
import { ref, watch } from "vue";
</script>

<template>
  <footer
    class="footer h-12 fixed bottom-0 left-0 w-full grid bg-black text-white lg:hidden"
  >
    <div class="flex flex-col justify-center items-center">
      <CIcon icon="house" class="text-white icon" />
      <span class="text-xs font-bold text-white-150">For You</span>
    </div>
    <div class="flex flex-col justify-center items-center">
      <CIcon icon="compass" class="text-white icon" />
      <span class="text-xs font-bold text-white">Discover</span>
    </div>
    <div class="flex flex-col justify-center items-center">
      <img src="../../assets/shape.svg" class="w-9 h-7" />
    </div>
    <div class="flex flex-col justify-center items-center">
      <CIcon icon="inbox" class="text-white icon" />
      <span class="text-xs font-bold text-white">Inbox</span>
    </div>
    <div class="flex flex-col justify-center items-center">
      <CIcon icon="user" class="text-white icon" />
      <span class="text-xs font-bold text-white">Profile</span>
    </div>
  </footer>
</template>
<style lang="css" scoped>
.footer {
  grid-template-columns: 20% 20% 20% 20% 20% 20%;
}
.icon {
  width: 32px;
  height: 32px;
}
.icon:deep(svg) {
  font-size: 20px;
}
</style>
