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
        'inside-glow': 'inset 0 0 10px #00a5a7, inset 0 0 20px #003C43',
        'outside-glow': '-1px 0 12px #00a5a7',
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
        'light-radial-gradient': 'radial-gradient(circle, #00a5a7 0%, rgba(0,60,67,0) 35%)',
        'dark-radial-gradient': 'radial-gradient(circle, #003C43 0%, rgba(0,0,0,0) 35%)',
      },
    },
  },
  plugins: [],
};
