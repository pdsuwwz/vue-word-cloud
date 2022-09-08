import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml (html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        '<title>❤️ Vue Word Cloud</title>'
      )
    }
  }
}

export default defineConfig({
  base: process.env.VITE_ROUTER_MODE === 'hash'
    ? ''
    : '/',
  plugins: [
    vue(),
    htmlPlugin()
  ],
  esbuild: {
    drop: [
      'console',
      'debugger'
    ]
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  define: {
    'process.env': process.env
  }
})
