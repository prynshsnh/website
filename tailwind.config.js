import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./_includes/**/*.pug", "./_includes/**/*.svg", "./*.pug"],
  theme: {
    fontFamily: {
      sans: "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
      serif: ["Tiempos", ...defaultTheme.fontFamily.serif],
      mono: "input-mono-condensed, Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",
    },
    extend: {
      keyframes: {
        'fade-in': {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        'fade-in': "fade-in 300ms cubic-bezier(0.16, 0, 0.13, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
