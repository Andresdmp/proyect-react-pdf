import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import js from '@eslint/js';
import Eslintrc from './.eslintrc.cjs';

export default [
  Eslintrc,
  js.configs.recommended,
  {
    languageOptions: { globals: globals.browser },

    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn'
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig
];
