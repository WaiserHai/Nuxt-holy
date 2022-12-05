/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/preline/dist/*.js"],
  colors: { themeBackground: "var(--background)", themeText: "var(--text)" },
  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/jit, require('preline/plugin'),"],
  darkMode: "class",
};
