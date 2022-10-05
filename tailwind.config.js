const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['futura-pt', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        playfairDisplay: ['"Playfair Display"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      colors: {
        blue: {
          primary: '#007EFF',
        },
        black: {
          primary: '#2F303A',
        },
        grey: {
          primary: '#D9D9D9',
        },
        white: '#FDFDFF',
        error: {
          primary: '#ff3333',
        },
      },
      bg: {
        black: {
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
          maxWidth: '90rem',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingRight: '1rem',
          paddingLeft: '1rem',
          '@screen md': {
            paddingRight: '5rem',
            paddingLeft: '5rem',
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
