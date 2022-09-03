# Vue Shows

This project is written with Vue 3 in Vite.

## Project Setup

```sh
npm install
```

or

```sh
yarn
```

## Compile and Hot-Reload for Development

```sh
npm run dev
```

or

```sh
yarn dev
```

## Compile and Minify for Production

```sh
npm run build
```

or

```sh
yarn build
```

## Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

or

```sh
yarn test:unit
```

## Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

or

```sh
yarn build
yarn test:e2e # or `yarn test:e2e:ci` for headless testing
```

## Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

or

```sh
yarn lint
```

## Project Overview

I create this project with Vue3 and Vite.
This is my first project with Vue.

I tried to add unit & end to end test as possible

For unit test I used  [vitest](https://vitest.dev/)

For e2e [cypress](https://www.cypress.io/)

I didn't find any api in api.tvmaze.com for genre filter. So I did get shows and then extract genres from there.

I use 3 api endpoints for this project (/shows, /shows/:id, /search/shows?q=)

I add [pinia](https://pinia.vuejs.org/) for store management. I add simple store for shows and some other state like loading or error

I add 2 routes. Home page and Detail page.
Detail Page is lazy loaded.

For styling: I used component based style with scoped tag

For horizontal slide I used [swiper](https://swiperjs.com/vue)

In components I used setup tag because better runtime & more readable code [details](https://vuejs.org/api/sfc-script-setup.html)

## Installed packages
### [swiper](https://swiperjs.com/vue)
### [pinia](https://pinia.vuejs.org/)
### [Vue3](https://vuejs.org/)
### [Vue Router](https://router.vuejs.org/)
### [Vite](https://vitejs.dev/)