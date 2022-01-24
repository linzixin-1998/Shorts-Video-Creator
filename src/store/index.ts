/*
 * @Author: muzi
 * @Date: 2022-01-24 11:48:31
 * @LastEditors: muzi
 * @LastEditTime: 2022-01-24 11:52:28
 */
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const store = createPinia();
store.use(piniaPluginPersistedstate);
export default store;
