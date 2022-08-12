/** *
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 17:44:23
 */

const path = require('path');
const requireAll = require('require-all');
const { getConfig } = require('@tsx-spec/shared');

const stylelints = requireAll({ dirname: path.resolve(__dirname, 'stylelint') });

/**
 * 获取stylelint配置
 * @param {*} rule 规则
 * @param {*} customConfig 自定义配置
 * @returns 返回指定配置
 */
exports.getStylelintConfig = function (rule, customConfig) {
  return getConfig(stylelints, rule, customConfig);
};
