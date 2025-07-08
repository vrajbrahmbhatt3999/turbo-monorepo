import type { Config } from 'tailwindcss';
import sharedConfig from '@my-monorepo/tailwind-config';

const config: Config = {
  ...sharedConfig,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    '../../packages/core/**/*.{js,ts,jsx,tsx}',
    '../../packages/modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
         inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
       fontSize: {
        '21': '21.46px',
      }
    },
  },
};

export default config;
