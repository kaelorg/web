module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      typescript: {
        project: 'packages/*/tsconfig.json',
      },
    },
  },
  rules: {
    camelcase: 'off',
  },
};
