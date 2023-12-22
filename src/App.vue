<script setup lang="ts">
import Main from "@/components/templates/Main.vue";
import CIcon from "@/components/atoms/CIcon.vue";

const handleChangeLanguage = (i18n) => {
  if (i18n.locale === "EN") {
    console.log("111");
    i18n.locale = "VI";
  } else {
    i18n.locale = "EN";
  }
};
</script>

<template>
  <p class="text-red-500">hello tiktok</p>
  <CIcon icon="search" class="text-red-500" />
  <Main>{{ $t("title") }}</Main>
  {{ $t("hello", { msg: $i18n.locale === "EN" ? "hello" : "xin chào" }) }}
  <button class="bg-red-300 text-white" @click="handleChangeLanguage($i18n)">
    Change language
  </button>
</template>
