/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-11 18:00:24
 */

// ESlint config for Vue TypeScript project
module.exports = {
  extends: [
    require.resolve('../typescript/vue'),
  ],
  rules: {
    // Change error to warn
    'semi': 'off',
    '@typescript-eslint/semi': 'warn',
    'eol-last': 'warn',
    'quote-props': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/dot-notation': 'off',
  },
};
