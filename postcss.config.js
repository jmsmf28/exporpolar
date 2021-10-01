// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
/* module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
} */

const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
};