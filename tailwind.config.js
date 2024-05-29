/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        myanimation: {
          '0%': { transform: '-translate-y-6', opacity: '0' },
          '100%': { transform: 'translate-y-6', opacity: '1' },
        },
        cubeScale: {
          to: {
            transform: 'scale3d(0.2, 0.2, 0.2)',
          },
        },
      },
      animation: {
        myanimation: 'myanimation 2s ease-in-out 1',
        'cube-scale': 'cubeScale 0.6s cubic-bezier(0.45, 0.03, 0.51, 0.95) infinite alternate',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
