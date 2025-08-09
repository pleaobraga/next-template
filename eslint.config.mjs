import storybook from "eslint-plugin-storybook";

import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  ...storybook.configs["flat/recommended"],

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      // Console handling
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',

      // Imports hygiene
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'type'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],

      // TypeScript hygiene
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],

      // React best practices
      'react/jsx-no-useless-fragment': 'warn',
    },
  },
]

export default eslintConfig
