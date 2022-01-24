<!--
 * @Author: muzi
 * @Date: 2022-01-24 10:50:58
 * @LastEditors: muzi
 * @LastEditTime: 2022-01-24 17:21:57
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import pack from "@/../package.json";
console.log(import.meta.env);

const drawer = ref(false);
const value1 = ref(0);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="pack.name" />

  <div class="demo-rate-block">
    <span class="demonstration">Default</span>
    <el-rate v-model="value1"></el-rate>
  </div>
  <el-button type="primary" style="margin-left: 16px"> open </el-button>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi d there!</span>
  </el-drawer>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
