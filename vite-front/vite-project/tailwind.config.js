/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 启用晚上模式
  theme: {
    extend: {
      fontFamily: {
        serif: ['Dancing Script', 'cursive'],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
      },
    },
  },

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [],
}

