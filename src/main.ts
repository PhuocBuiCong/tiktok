import "./style.css";
import "./utils/fontawesome";

import { createApp } from "vue";
import i18n from "@/utils/i18n";


import App from "./App.vue";



const app = createApp(App);

app.use(i18n);
app.mount("#app");

