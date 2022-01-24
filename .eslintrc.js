/*
 * @Author: muzi
 * @Date: 2022-01-24 11:59:22
 * @LastEditors: muzi
 * @LastEditTime: 2022-01-24 16:03:44
 */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    'vue-global-api'
  ],
  env: {
    "vue/setup-compiler-macros": true,
    "node": true 
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "prettier/prettier": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};