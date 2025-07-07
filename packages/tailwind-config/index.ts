import type { Config } from 'tailwindcss';

const config: Config = {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: 'red',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        loginBg: "url('/background-login.png')",
      },
    },
  },
  plugins: [],
};

export default config;
