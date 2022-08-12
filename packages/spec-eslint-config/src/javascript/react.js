/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 18:06:28
 */

module.exports = {
  extends: [
    './common',
    '../rules/react',
  ].map(require.resolve),
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
};
