/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        "primary-muted": 'rgb(var(--color-primary-muted) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        "text-color": 'rgb(var(--color-text-color) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        transparent: 'transparent',
        current: 'currentColor'
      }
    }
  },
  plugins: []
}
