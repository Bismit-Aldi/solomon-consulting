module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-solomon': '#07BCBC',
        'orange-solomon': '#FFC440',
      },
      backgroundImage: {
        'hero-pattern': "url('../images/hero_bg.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
