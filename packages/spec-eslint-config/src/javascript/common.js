/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 18:06:28
 */

module.exports = {
  extends: [
    '../rules/base/best-practices',
    '../rules/base/possible-errors',
    '../rules/base/style',
    '../rules/base/variables',
    '../rules/base/es6',
    '../rules/base/strict',
    '../rules/imports',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },
  root: true,
};
