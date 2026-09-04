import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: 'min-dark',
    },
  },
})
