/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 18:00:24
 */

// ESlint config for common ts project
module.exports = {
  extends: [require.resolve('../typescript/common')],
  rules: {
    // Change error to warn
    semi: 'off',
    '@typescript-eslint/semi': 'warn',
    'eol-last': 'warn',
    'quote-props': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/dot-notation': 'off',
  },
};
