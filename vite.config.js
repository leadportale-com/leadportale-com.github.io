const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '..'
  },
  server: {
    port: 8000
  }
}
