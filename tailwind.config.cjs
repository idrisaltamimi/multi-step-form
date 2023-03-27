/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bg: '#EFF5FF',
      borderColor: '#D6D9E6',
      denim: '#022959',
      white: '#FFFFFF',
      grey: '#9699AA',
      lightGrey: '#D6D9E6',
      veryLightGrey: '#F8F9FF',
      purple: '#483EFF',
      lightBlue: '#ABBCFF',
      skyBlue: '#BEE2FD',
      red: '#EE374A',
      pink: '#F9818E',
      orange: '#FFAF7E',
    },
    borderRadius: {
      sm: '8px',
      full: '50%'
    },
    fontWeight: {
      bold: 700,
      regular: 500,
      light: 400
    }
  },
  plugins: [],
}
