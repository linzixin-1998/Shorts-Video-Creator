/*
 * @Author: muzi
 * @Date: 2022-01-24 10:50:58
 * @LastEditors: muzi
 * @LastEditTime: 2022-01-24 11:49:21
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App);

app.use(router).use(store).mount("#app");
