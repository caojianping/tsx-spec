/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 17:23:32
 */

/**
 * 深度合并
 * @param {*} target 目标对象
 * @param {*} source 原始对象
 * @returns 返回合并后的对象
 */
exports.deepMerge = function (target, source) {
  const newObj = JSON.parse(JSON.stringify(target));

  Object.keys(source).forEach((key) => {
    const type = Object.prototype.toString.call(source[key]);
    if (type === "[object Array]") {
      newObj[key] = [...(target[key] || []), ...source[key]];
    } else if (type === "[object Object]") {
      newObj[key] = { ...(target[key] || {}), ...source[key] };
    } else {
      newObj[key] = source[key];
    }
  });

  return newObj;
};

/**
 * 获取配置
 * @param {*} configs 配置集合
 * @param {*} rule 规则
 * @param {*} customConfig 自定义配置
 * @returns 返回指定的配置
 */
exports.getConfig = function (configs, rule, customConfig) {
  if (!configs[rule]) {
    throw new Error(`Rule '${rule}' not Support!`);
  }

  return deepmerge(configs[rule], customConfig || {});
};
