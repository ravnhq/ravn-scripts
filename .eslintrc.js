const ERROR = 'error'
const OFF = 'off'

const tsFiles = '**/*.{ts,tsx}'
const jsFiles = '**/*.{js, jsx}'
const typeDefinitionFiles = '**/*.d.ts'
const testFiles = [
  '**/__tests__/**/*.[jt]s?(x)',
  '**/?(*.)+(spec|test).[jt]s?(x)',
]

module.exports = {
  extends: './packages/eslint-config-ravn/base.js',
}
