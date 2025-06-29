import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  {
    ignores: ['projects/**/*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        sourceType: 'module',
      },
      ecmaVersion: 2022,
      globals: {
        window: 'readonly',
        document: 'readonly',
        module: 'writable',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript,
      import: eslintPluginImport,
    },
    rules: {
      ...eslintPluginTypeScript.configs.recommended.rules,
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginImport.configs.typescript.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'after-used', argsIgnorePattern: '^_' }],
      'import/order': ['warn', { 'newlines-between': 'always' }],
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {},
  },
];
