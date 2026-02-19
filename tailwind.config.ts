import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#10b981',
        tertiary: '#f59e0b',
        accent: '#dbeafe',
        quaternary: '#eff6ff',
        'dark-gray': '#1e40af',
        'green-dark': '#059669',
        'yellow-dark': '#d97706',
        'blue-light': '#93c5fd',
        'green-light': '#6ee7b7',
        'yellow-light': '#fcd34d',
        'text-dark': '#1e3a8a',
        'text-muted': '#64748b',
        'bg-light': '#f8fafc',
      },
    },
  },
  plugins: [],
};
export default config;
