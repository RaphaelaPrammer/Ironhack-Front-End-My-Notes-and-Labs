import { createApp } from "vue";
// We import CreatePinia to be able to use it
import { createPinia } from "pinia";

import App from "./App.vue";

import "./assets/style.css";

const app = createApp(App);

// After the app is created we incorporate Pinia to it
app.use(createPinia());

app.mount("#app");
