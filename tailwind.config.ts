import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          100: '#151515',
          50: '#222222',
        },
        primary: '#7c3aed',
        hover: '#8b5cf6',
        text: '#eee',
      },
    },
  },
  plugins: [],
} satisfies Config;
