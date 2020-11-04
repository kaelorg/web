module.exports = {
  plugins: ['import', 'import-helpers', 'prettier'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['js', 'jsx'],
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
        rootPathPrefix: '@app',
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',

    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/label-has-associated-control': 'off',

    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['js', 'jsx'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        alphabetize: { order: 'asc', ignoreCase: true },
        groups: [
          'module',
          '/^@app/(?!layouts|components|pages|store|config|services|utils|styles)/',
          '/^@app/(layouts|components)/',
          '/^@app/pages/',
          '/^@app/(store|config|services|utils)/',
          ['parent', 'sibling', 'index'],
          '/^(@app/styles|(([.]{1,})/styles))/',
        ],
      },
    ],
  },
};
