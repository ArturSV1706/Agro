import { defineNuxtConfig } from "nuxt/config";

// JykWxSuV40IQxpLE - senha DB

export default {
  modules: ["@nuxtjs/tailwindcss"],
  
 
  runtimeConfig: {
    STRIPE_SECRET: process.env.STRIPE_SECRET,
    public: {
    }
    // The private keys which are only available within server-side
  },

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
