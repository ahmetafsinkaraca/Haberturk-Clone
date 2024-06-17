/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      width: {
        width: '500px'
      }
    },
  },
  plugins: [
  ],
}

