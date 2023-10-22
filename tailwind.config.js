const defaultTheme = require("tailwindcss/defaultTheme");
// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   mode: "jit",
//   content: {
//     files: [
//       "./components/**/*.{vue,js}",
//       "./layouts/**/*.vue",
//       "./pages/**/*.vue",
//       "./app.vue",
//       "./plugins/**/*.{js,ts}",
      
//     ],
//   },
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [
//     require("@tailwindcss/forms"),
//     require("@tailwindcss/typography"),
//     require("@tailwindcss/line-clamp"),
//     require("@tailwindcss/aspect-ratio"),
//   ],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
      azul: "#4A8FE7",
      amarelo: "#ffae00",
      escuro: "#0F2A25",
      claro: "#DDE0D0",
      verde: "#396858",
      verde_claro: "#329F5B",
      verde_apagado: "#B9C2B3",
      vermelho: "#D52952",
      laranja: "rgb(242,129,35)",
      marrom: "#593D3B",
    },
      fontFamily: {
        aristotelica: ["Aristotelica"]
      },
      animation: {
        'spin-fast': "spin 0.5s linear infinite"
      },
      backgroundImage: {
        'backdrop': "linear-gradient(90deg, rgba(15,42,37,1) 0%, rgba(42,77,65,1) 35%, rgba(23,26,50,0) 100%)",
     },
    },
  },
  plugins: [],
}