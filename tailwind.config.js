module.exports = {
  purge: ['./pages/**/*.js', './components/*.js'],
  experimental: {
    darkModeVariant: true,
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      c000: '#ffffff',
      c005: '#f2f2f2',
      c010: '#e5e5e5',
      c020: '#cccccc',
      c030: '#b2b2b2',
      c040: '#999999',
      c050: '#7f7f7f',
      c060: '#666666',
      c070: '#4c4c4c',
      c080: '#333333',
      c090: '#191919',
      c095: '#0a0a0a',
      c100: '#000000',
    },
    fontFamily: {
      sans: [
        'Inter var experimental',
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    fontSize: {
      md: 15,
      lg: 25,
      '2xl': 30,
      '5xl': 100,
    },
  },
};
