/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 18:00:24
 */

// ESlint config for Vue project
module.exports = {
  extends: [require.resolve('../javascript/vue')],
  rules: {
    // Change error to warn
    semi: 'warn',
    'eol-last': 'warn',
    'quote-props': 'warn',
    'no-unused-vars': 'warn',
    'dot-notation': 'off',
  },
};
