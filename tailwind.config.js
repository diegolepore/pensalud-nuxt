module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        brand: {
          purple: '#615CFC',
          gray1: '#F2F2F2'
        },
      },
      fontFamily: {
        sans: [
          'Raleway',
        ],
        serif: [
          'Playfair Display',
        ]
      }
    },
    lineClamp: {
      1: 1,
      2: 2,
      3: 3
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-line-clamp')
  ],
}