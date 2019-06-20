module.exports = {
  extends: ['kentcdodds/react', 'prettier/react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/jsx-boolean-value': ERROR,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.jsx', '.tsx'] }],
    'react/no-did-mount-set-state': OFF, // https://github.com/yannickcr/eslint-plugin-react/issues/1754
    'react/jsx-curly-brace-presence': ERROR,

    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,
  },
}
