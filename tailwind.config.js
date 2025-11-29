module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'gold': '#d4af37',
        'faded-green': '#4e6e5d',
        'ethereal-light': '#f0f0f0',
      },
      backgroundImage: theme => ({
        'misty-mountains': "url('/assets/backgrounds/misty-mountains.svg')",
        'ruins-layer': "url('/assets/backgrounds/ruins-layer.png')",
      }),
      fontFamily: {
        serif: ['Garamond', 'serif'],
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};