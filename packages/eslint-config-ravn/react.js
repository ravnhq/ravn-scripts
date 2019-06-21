module.exports = {
  extends: ['kentcdodds/react', 'prettier/react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'global-require': 'error',
    
    'react/jsx-boolean-value': "error",
    'react/jsx-filename-extension': ["error", { extensions: ['.jsx', '.tsx'] }],
    'react/no-did-mount-set-state': 'off', // https://github.com/yannickcr/eslint-plugin-react/issues/1754
    'react/jsx-curly-brace-presence': "error",

    'react-hooks/rules-of-hooks': "error",
    'react-hooks/exhaustive-deps': "error",
  },
}
