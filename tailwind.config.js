module.exports = {
  purge: {
    content: ["src/**/*.js", "public/**/*.html"]
  },
  darkMode: false,
  theme: {
    extends: {},
    gridTemplateColumns: {
      'cards': 'repeat(auto-fill, minmax(300px, auto))'
    }
  },
  variants: {
    extends: {}
  },
  plugins: [],
};