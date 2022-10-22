import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { initFirebase } from "./config/firebase";

initFirebase();
createApp(App).mount("#app");
