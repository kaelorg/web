module.exports = {
  extends: '@hitechline/eslint-config-web',
  rules: {
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],

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
