module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'plugin:eslint-comments/recommended',
    'kentcdodds/possible-errors',
    'kentcdodds/best-practices',
    'prettier',
    'prettier/babel',
  ],
  plugins: ['babel', 'eslint-comments'],
  rules: {
    complexity: 'off',
    'consistent-return': 'off',
    'global-require': 'error',
    'no-array-constructor': 'error',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-invalid-this': 'off',
    'no-new-object': 'error',
    'no-unused-expressions': 'off',
    'prefer-const': 'error',
    'valid-typeof': 'off',

    'babel/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'babel/valid-typeof': 'error',
    'babel/no-invalid-this': 'error',
  },
}
