/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 18:06:28
 */

module.exports = {
  extends: [
    './common',
    '../rules/vue',
  ].map(require.resolve),
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#parseroptionsparser
    parser: '@babel/eslint-parser',
  },
};
