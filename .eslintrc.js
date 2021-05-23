module.exports = {
  env: {
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    /**
     * @note Most of the rules are set to emit errors to strictly enforce clean
     * code. Also note that 'off' | 'warn' | 'error' is preferred over 0 | 1 | 2
     * This increases readability of the rules and we won't mistake it for some
     * other value, for example, the `2` in `indent: ['error', 2]`
     */
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    'no-shadow': 'error',
    indent: ['error', 2],
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    'no-trailing-spaces': 1,
    'no-warning-comments': ['warn', {
      terms: ['TODO', 'TOFIX', 'KIV'],
    }],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': [
      'error',
      {
        classes: 'always',
        switches: 'never',
      },
      { allowSingleLineBlocks: true },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    yoda: ['error', 'never'],
  },
}
