/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 10px 20px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        light_gray: '#B4B4B8',
        gray: '#686D76',
        dark_gray: '#373A40',
        turqoise: '#00a5a7',
        dark_turqoise: '#003C43',
        white: '#FFFFFF',
        black: '#000000',
      },
      backgroundImage: {
        'turqoise-gradient': 'linear-gradient(to right, #00a5a7, #003C43)',
      },
    },
  },
  plugins: [],
};
