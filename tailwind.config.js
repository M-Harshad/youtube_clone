/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            arial: ['Arial', 'sans-serif'],
        },
        colors: {
          background: '#181818',
          secondary: '#212121',
          text: '#ffffff',
          search: '#121212',
          Hover: '#525252'
        },
        maxWidth: {
          search: '32rem',
        },
        screens: {
          after428: '428px',
          after358: '358px'
        },
        fontSize: {
          SmallSideNav: '10px',
          NormSideNav: '14px'
        }
  },
  plugins: [],
  },
  plugins: [],
}