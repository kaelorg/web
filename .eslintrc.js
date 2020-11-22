module.exports = {
  root: true,
  extends: '@hitechline/eslint-config-web',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    camelcase: 'off',
  },
};
