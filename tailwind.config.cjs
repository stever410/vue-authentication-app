/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      ringColor: {
        primary: "var(--color-text-primary)",
      },
      borderColor: {
        primary: "var(--color-input-border)",
      },
      placeholderColor: {
        primary: "var(--color-text-placeholder)",
      },
      textColor: {
        "primary-theme": "var(--color-primary)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        inverted: "var(--color-text-inverted)",
      },
      backgroundColor: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
