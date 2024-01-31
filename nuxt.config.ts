import { defineNuxtConfig } from "nuxt/config";

// JykWxSuV40IQxpLE - senha DB

export default {
  modules: ["@nuxtjs/tailwindcss"],

  css: ["~/assets/css/tailwind.css"],

  build: {
    transpile: ["chart.js"],
},

  postcss: {
    postcssOptions: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  },

  devtools: {
    enabled: false,
  },
};
