import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./_includes/**/*.pug", "./_includes/**/*.svg", "./*.pug"],
  theme: {
    fontFamily: {
      sans: "Suisse, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
      serif: ["Tiempos", ...defaultTheme.fontFamily.serif],
      mono: "input-mono-condensed, Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",
    }
  },
  plugins: [require("@tailwindcss/typography")],
}
