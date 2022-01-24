/*
 * @Author: muzi
 * @Date: 2022-01-24 11:43:27
 * @LastEditors: muzi
 * @LastEditTime: 2022-01-24 13:43:53
 */
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./router.config";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
