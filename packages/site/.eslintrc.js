module.exports = {
  extends: '@hitechline/eslint-config-web',
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        alphabetize: { order: 'asc', ignoreCase: true },
        groups: [
          ['module'],
          ['parent', 'sibling', 'index'],
          '/^@(layout|components)/',
          '/^@sections/',
          '/^@services/',
          '/^@(utils|fixtures)/',
          ['/.css$/', '/^@styles/'],
        ],
      },
    ],
  },
};
