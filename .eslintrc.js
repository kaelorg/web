module.exports = {
  root: true,
  extends: '@hitechline/eslint-config-web',
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/*': 'off',
      },
    },
  ],
  rules: {
    camelcase: 'off',
  },
};
