import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'static-page-routes',
      enforce: 'post',
      generateBundle(_options, bundle) {
        const indexHtml = bundle['index.html']
        if (indexHtml?.type !== 'asset') {
          return
        }

        for (const route of ['home', 'whoami', 'melodicgauntlet', 'contact']) {
          this.emitFile({
            type: 'asset',
            fileName: `${route}/index.html`,
            source: indexHtml.source,
          })
        }
      },
    },
  ],
  base: '/',
})
