// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
)
