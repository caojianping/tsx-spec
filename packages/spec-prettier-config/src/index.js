/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 17:27:34
 */

const path = require("path");
const requireAll = require("require-all");
const { getConfig } = require("@tsx-spec/shared");

const prettiers = requireAll({dirname: path.resolve(__dirname, "prettier")});

exports.getPrettierConfig = function (rule, customConfig) {
  return getConfig(prettiers, rule, customConfig);
};
