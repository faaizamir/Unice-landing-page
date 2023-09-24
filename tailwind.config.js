/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 80s linear infinite',
        'spin-normal': 'spin 10s linear infinite',
        'slow-bounce': 'bounce 3s infinite',
        'btn-bounce': 'bounce 5s infinite'
      },
      fontFamily: {
        'Poppins': 'Poppins',
      },
      colors: {
        'Primary': '#844adb',
      },
    },
  plugins: [],
}
}