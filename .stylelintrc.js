/*
 * @Author: muzi
 * @Date: 2022-01-24 17:40:50
 * @LastEditors: muzi
 * @LastEditTime: 2022-01-24 17:40:51
 */
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  plugins: ["stylelint-order"],
  rules: {
    indentation: 4,
    "no-descending-specificity": null,
  },
};
