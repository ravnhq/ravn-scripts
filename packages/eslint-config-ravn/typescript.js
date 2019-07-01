const path = require('path')

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    'consistent-return': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/@typescript-eslint/no-explicit-any': 'off',
  },
}
