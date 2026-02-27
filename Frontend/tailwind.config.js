/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Motu Patlu inspired playful colors
        'primary-yellow': '#FFD700',
        'primary-orange': '#FF8C00',
        'primary-red': '#FF4500',
        'primary-blue': '#4169E1',
        'cartoon-sky': '#87CEEB',
        'cartoon-grass': '#90EE90',
        'cartoon-sun': '#FFA500',
        'cartoon-purple': '#9370DB',
        'neutral-light': '#FFF8DC',
        'neutral-dark': '#2C3E50',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Fredoka', 'cursive'],
      },
      borderRadius: {
        'bubble': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
