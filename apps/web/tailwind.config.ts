import type { Config } from 'tailwindcss';
import sharedConfig from '@my-monorepo/tailwind-config';

const config: Config = {
  ...sharedConfig,
  content: ['./index.html',
     './src/**/*.{js,ts,jsx,tsx}',  
     '../../packages/ui/**/*.{js,ts,jsx,tsx}',
     '../../packages/modules/**/*.{js,ts,jsx,tsx}' ],
};


export default config;
