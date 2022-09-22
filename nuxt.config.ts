import { defineNuxtConfig } from "nuxt";

// JykWxSuV40IQxpLE - senha DB

export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          
          tailwindcss: {},
          autoprefixer: {},
          
        },
      },
    },
  },
  meta:{
    link:[
        {
            rel: 'stylesheet',
            href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        },
    ],
},
});
