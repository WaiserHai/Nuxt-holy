/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  colors: { themeBackground: "var(--background)", themeText: "var(--text)" },
  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/jit"],
  darkMode: "class",
};
