/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        smoothBounce: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', easing: 'ease-in-out' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)', easing: 'ease-in-out' }, // Adjust rotation angle
        },
      },
      animation: {
        'smooth-bounce': 'smoothBounce 3s infinite', // Adjust speed here
      },
    },
  },
  plugins: [],
};
