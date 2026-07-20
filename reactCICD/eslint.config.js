// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const js = require('@eslint/js');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
    
  { files: ['**/*.ts', '**/*.tsx'], plugins: {js}, extends: ["js/recommended"] },
    
  { rules: {
    }
  }
]);
