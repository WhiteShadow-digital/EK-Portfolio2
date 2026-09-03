/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      colors: {
        crimson: {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc0c0',
          300: '#ff9494',
          400: '#ff5252',
          500: '#ff2121',
          600: '#f00d0d',
          700: '#cc0a0a',
          800: '#a80d0d',
          900: '#8b1010',
          DEFAULT: '#E10600',
        },
        charcoal: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#999999',
          400: '#666666',
          500: '#444444',
          600: '#333333',
          700: '#222222',
          800: '#111111',
          900: '#0a0a0a',
          950: '#050505',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'slide-left': 'slideLeft 0.6s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'glitch': 'glitch 0.3s steps(2) forwards',
        'flicker': 'flicker 4s infinite',
        'marquee': 'marquee 20s linear infinite',
        'pulse-red': 'pulseRed 2s ease-in-out infinite',
        'draw-line': 'drawLine 1s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-2px, 1px)' },
          '50%': { transform: 'translate(2px, -1px)' },
          '75%': { transform: 'translate(-1px, 2px)' },
          '100%': { transform: 'translate(0)' },
        },
        flicker: {
          '0%, 97%, 100%': { opacity: '1' },
          '98%': { opacity: '0.8' },
          '99%': { opacity: '0.95' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(225,6,0,0.4)'},
          '50%': { boxShadow: '0 0 0 8px rgba(225,6,0,0)' },
        },
        drawLine: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
