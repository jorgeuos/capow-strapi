/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')( {strategy: 'class'} ),
    require('@tailwindcss/typography'),
  ],
}

