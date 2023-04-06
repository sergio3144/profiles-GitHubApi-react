/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'color-body': '#2a2a72',
      'color-input': '#4c2885',
      'color-repositorio': '#212a72',
      'color-text': '#fff',
      'error': '#FF0000'
    },
    fontFamily: {
      'Quicksand': ['Quicksand', 'sans-serif']
    },
     extend: {},
   },
   plugins: [],
 };