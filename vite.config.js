const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '..',
    rollupOptions: {
      input: {
        main: new URL('./src/index.html', import.meta.url).pathname,
        imprint: new URL('./src/imprint.html', import.meta.url).pathname,
        agb: new URL('./src/agb.html', import.meta.url).pathname
      }
    }

  },
  server: {
    port: 8000
  }
}
