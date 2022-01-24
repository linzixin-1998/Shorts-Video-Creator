/*
 * @Author: muzi
 * @Date: 2022-01-24 10:50:58
 * @LastEditors: muzi
 * @LastEditTime: 2022-01-24 15:15:26
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router',],
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-import.d.ts',
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      // 配置文件生成位置
      dts: 'src/components.d.ts',
      // ui库解析器
      resolvers: [ElementPlusResolver()],
    }),
    styleImport({
      resolves: [
        ElementPlusResolve(),
      ]

    })
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: '0.0.0.0'
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/color.less";`,
        javascriptEnabled: true
      },
    },
  }
})
