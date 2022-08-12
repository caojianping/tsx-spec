/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 17:59:00
 */

 const path = require("path");
 const requireAll = require("require-all");
 const { getConfig } = require("@tsx-spec/shared");

 const eslints = requireAll({dirname: path.resolve(__dirname, "eslint")});

 /**
  * 获取ESLint配置
  * @param {*} rule 规则
  * @param {*} customConfig 自定义配置
  * @returns 返回指定配置
  */
 exports.getESLintConfig = function (rule, customConfig) {
   return getConfig(eslints, rule, customConfig);
 };
