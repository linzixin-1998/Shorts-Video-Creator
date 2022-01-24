/*
 * @Author: muzi
 * @Date: 2022-01-24 10:50:58
 * @LastEditors: muzi
 * @LastEditTime: 2022-01-24 11:16:00
 */
/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 更多环境变量...
  VITE_OUTPUT_DIR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
