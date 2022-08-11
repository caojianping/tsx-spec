/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 17:27:34
 */

const path = require("path");
const requireAll = require("require-all");
const { getConfig } = require("@tsx-spec/shared");

const commitlints = requireAll({dirname: path.resolve(__dirname, "commitlint")});

exports.getCommitlintConfig = function (rule, customConfig) {
  return getConfig(commitlints, rule, customConfig);
};
