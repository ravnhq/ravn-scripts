module.exports = {
  extends: ['kentcdodds/react', 'prettier/react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/jsx-boolean-value': 'error',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/no-did-mount-set-state': 'off', // https://github.com/yannickcr/eslint-plugin-react/issues/1754
    'react/no-unescaped-entities': 'off',
    'react/jsx-curly-brace-presence': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
}
