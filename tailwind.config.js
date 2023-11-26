/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "4800px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightpink: "#FDD5D8",
        lightorange: "#FFE0AD",
        lightyellow: "#FFF8BB",
        lightgreen: "#CEFCDA",
        lightpurple: "#8792F5",
        lightblue: "#87CEFA",
        lightgray: "#D3D3D3",
        lightblack: "#313638",
      }
    },
  },
  plugins: [],
}

