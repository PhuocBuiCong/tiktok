import "./style.css";
import "@/utils/fontawesome";
import "@/utils/validators";
import i18n from "@/utils/i18n";

import { createApp } from "vue";
import { createPinia } from "pinia";
import useClickOutside from "./use/useClickOutSide";

import App from "./App.vue";

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.directive("click-out-side", useClickOutside);
app.mount("#app");
