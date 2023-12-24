<script setup lang="ts">
import Main from "@/components/templates/Main.vue";
import CIcon from "@/components/atoms/CIcon.vue";
import i18n from "@/utils/i18n";

import { type ComputedRef, type Ref, computed, ref, watch } from "vue";
import CTextField from "./components/atoms/CTextField.vue";
import { useHomeViewStore } from "@/stores/home";
import Base from "@/components/templates/Base.vue";
const handleChangeLanguage = () => {
  console.log(i18n.global.locale.value);
  if (i18n.global.locale.value === "en") {
    i18n.global.locale.value = "vi";
  } else {
    i18n.global.locale.value = "en";
  }
};

const homeView = useHomeViewStore();

watch(
  () => homeView.home,
  (newValue) => {
    console.log("test", newValue);
  }
);
</script>

<template>
  <!-- <p class="text-red-500">hello tiktok</p>
  <CIcon icon="search" class="text-red-500" />
  <Main>{{ i18n.global.t("description") }}</Main>
  {{
    i18n.global.t("test", {
      msg: i18n.global.locale.value === "en" ? "hello" : "xin chào",
    })
  }}
  <button class="bg-red-200 text-white" @click="handleChangeLanguage">
    Change language
  </button>
  <br />
  <br />
  <br />

  <CTextField
    v-model="homeView.home"
    label="input1"
    name="test1"
    placeholder="input here"
    :required="true"
    rules="required"
  /> -->
  <Base> test header </Base>
</template>
