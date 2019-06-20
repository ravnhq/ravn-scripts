const path = require('path')

const allTypescriptFiles = '**/*.{ts,tsx}'
const tsxFiles = '**/*.tsx'
const typeDefinitionFiles = '**/*.d.ts'

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.json'),
  },
  rules: {
    'consistent-return': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  },
}
