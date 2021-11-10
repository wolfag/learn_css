module.exports = {
  mode: 'jit',
  purge: ['./**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],

  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        35: '35px',
      },
      colors: {
        gray333: '#333',
        orangefa: '#ffa400',
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: ['odd'],
    },
  },
  plugins: [],
};
