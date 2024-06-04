import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: new URL("./src/index.html", import.meta.url).pathname,
        imprint: new URL("./src/imprint.html", import.meta.url).pathname,
        agb: new URL("./src/agb.html", import.meta.url).pathname,
        privacy: new URL("./src/privacy.html", import.meta.url).pathname,
        s24: new URL("./src/aktion-sommer24.html", import.meta.url).pathname,
      },
    },
  },
  publicDir: "../public",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
  server: {
    port: 8000,
  },
};
