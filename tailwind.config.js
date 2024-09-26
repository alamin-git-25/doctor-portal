/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/bg.png')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          thard:"#3A4256"
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

