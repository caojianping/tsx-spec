/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 18:00:24
 */

// ESlint config for common js project
module.exports = {
  extends: [require.resolve('../javascript/common')],
  rules: {
    // Change error to warn
    semi: 'warn',
    'eol-last': 'warn',
    'quote-props': 'warn',
    'no-unused-vars': 'warn',
    'dot-notation': 'off',
  },
};
