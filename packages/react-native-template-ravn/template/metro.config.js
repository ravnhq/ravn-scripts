module.exports = {
  transformer: {
    // eslint-disable-next-line require-await
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
