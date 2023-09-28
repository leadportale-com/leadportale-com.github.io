/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#236aa1',
        'green': {
          '50': '#f5faeb',
          '100': '#e6f5d2',
          '200': '#d0ebab',
          '300': '#b1dc7a',
          '400': '#89c63f',
          '500': '#75b032',
          '600': '#598c24',
          '700': '#466b20',
          '800': '#39561e',
          '900': '#32491e',
          '950': '#18280b',      
        },
      },  
    },  
    fontFamily: {
      'sans': ['system-ui', 'ui-sans-serif', 'Roboto', "Helvetica Neue", 'sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },    
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },  
  },
  plugins: [],
}

