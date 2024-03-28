import { fileURLToPath, URL } from 'node:url'
import * as babel from '@babel/core'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
const babelPlugin = {
  name: 'plugin-babel',
  transform: (src: string, id: string) => {
    if (/\.(jsx?|vue)$/.test(id)) {
      // the pattern of the file to handle
      return babel.transform(src, {
        filename: id,
        babelrc: true
      })
    }
  }
}

export default defineConfig({
  plugins: [
    vue({
      script: {
        babelParserPlugins: ['decorators'] // must enable decorators support
      }
    }),
    babelPlugin // must be after the vue plugin
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
