# Public website of leadportale.com

Using TailwindCSS, Handlebars, and Vite.

## How to run locally

Install dependencies:

```shell
npm install
```

Run server for local development:

```shell
npm start
```

Build assets:

```shell
npm run build
```

## Deploy

Just commit and push changes. GitHub actions will deploy them, see `.github/workflows/deploy-pages.yml`

## Initial setup

This repo has been set up by these commands:

    npm install -D tailwindcss postcss autoprefixer vite vite-plugin-handlebars rimraf
    mkdir {src,src/js,src/css}
    touch src/index.html src/js/main.js src/css/main.css vite.config.js
    npx tailwindcss init -p
    npm start
