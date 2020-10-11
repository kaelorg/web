module.exports = {
  extends: '@hitechline/eslint-config-web',
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        alphabetize: { order: 'asc', ignoreCase: true },
        groups: [
          ['module', '/^@/'],
          '/^@(api|config|styles|layout|components)/',
          ['parent', 'sibling', 'index'],
          '/.(styl|stylus)$/',
        ],
      },
    ],
  },
};
