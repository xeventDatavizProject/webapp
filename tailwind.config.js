const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['futura-pt', ...defaultTheme.fontFamily.sans],
        playfairDisplay: ['"Playfair Display"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          primary: '#007EFF',
        },
        blackish: {
          primary: '#2F303A',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/bg.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '85rem',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingRight: '1rem',
          paddingLeft: '1rem',
          '@screen md': {
            paddingRight: '2rem',
            paddingLeft: '2rem',
          },
        },
      });
    },
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
};
