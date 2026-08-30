/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: {
          DEFAULT: '#1A2433',
          hover: '#232F41',
          active: '#2B3A50',
        },
        topbar: '#2F6FED',
        accent: {
          blue: '#2F6FED',
          green: '#16A34A',
          orange: '#F59E0B',
          red: '#EF4444',
          purple: '#8B5CF6',
        },
        bg: {
          page: '#F2F4F8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
