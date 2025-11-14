/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-900": "#1d1e21",
        "neutral-800": "#161719",
        "neutral-600": "#28292cb6",
        "neutral-400": "#aaaaaa",
        "neutral-300": "#c1c1c1",
        "neutral-200": "#6c717e",

        // Accent
        "accent-blue": "#0dcaf0",
      },
    },
  },
  plugins: [],
};
