/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 17:27:34
 */

const path = require('path');
const requireAll = require('require-all');
const { getConfig } = require('@tsx-spec/shared');

const commitlints = requireAll({ dirname: path.resolve(__dirname, 'commitlint') });

/**
 * 获取commitlint配置
 * @param {*} rule 规则
 * @param {*} customConfig 自定义配置
 * @returns 返回指定配置
 */
exports.getCommitlintConfig = function (rule, customConfig) {
  return getConfig(commitlints, rule, customConfig);
};
