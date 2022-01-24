/*
 * @Author: muzi
 * @Date: 2022-01-24 11:50:12
 * @LastEditors: muzi
 * @LastEditTime: 2022-01-24 11:50:12
 */
import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app",
  state: () => {
    return {
      config: "app",
    };
  },
  actions: {
    setData(data: any) {
      console.log(data);
      this.config = data;
    },
  },
});
