/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 17:44:23
 */

 const path = require("path");
 const requireAll = require("require-all");
 const { getConfig } = require("@tsx-spec/shared");

 const stylelints = requireAll({dirname: path.resolve(__dirname, "stylelint")});

 exports.getStylelintConfig = function (rule, customConfig) {
   return getConfig(stylelints, rule, customConfig);
 };
