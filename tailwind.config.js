/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a237e',
          light: '#534bae',
          dark: '#000051',
        },
        secondary: {
          DEFAULT: '#1976d2',
          light: '#63a4ff',
          dark: '#004ba0',
        },
        accent: {
          DEFAULT: '#ff4081',
          light: '#ff79b0',
          dark: '#c60055',
        },
        success: {
          DEFAULT: '#10B981',
        },
        error: {
          DEFAULT: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

