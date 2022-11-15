// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./public/index.html",
  ],
  theme: {
    colors: {
      purple: {
        50: "#9049ff",
        100: "#863fff",
        200: "#7c35ff",
        300: "#722bff",
        400: "#6821f5",
        500: "#5e17eb",
        600: "#540de1",
        700: "#4a03d7",
        800: "#4000cd",
        900: "#3600c3",
      },
      teal: {
        50: "#8effff",
        100: "#84ffff",
        200: "#7affff",
        300: "#70f5fa",
        400: "#66ebf0",
        500: "#5ce1e6",
        600: "#52d7dc",
        700: "#48cdd2",
        800: "#3ec3c8",
        900: "#34b9be",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  extend: {},
  plugins: [require("flowbite/plugin"), require("flowbite-typography")],
};
