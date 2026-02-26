// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import { globalIgnores } from 'eslint/config'

export default withNuxt(
  // Your custom configs here
  {
    ...globalIgnores(['sst-env.d.ts']),
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
)
