/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 17:23:32
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

exports.getConfig = function (configs, rule, customConfig) {
  if (!configs[rule]) {
    throw new Error(`Rule '${rule}' not Support!`);
  }

  return deepmerge(configs[rule], customConfig || {});
};
