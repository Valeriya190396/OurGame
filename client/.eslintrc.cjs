module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off'
  },
  
}
