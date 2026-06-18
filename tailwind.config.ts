import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f6ead6',
        ember: '#f08a5d',
        gold: '#d9b45f',
        ink: '#1b1a18',
        moss: '#2f5d50',
        slate: '#0f172a'
      },
      boxShadow: {
        royal: '0 24px 80px rgba(15, 23, 42, 0.28)'
      },
      backgroundImage: {
        'royal-radial': 'radial-gradient(circle at top, rgba(244, 208, 126, 0.24), transparent 45%), linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(9, 14, 24, 1))'
      }
    }
  },
  plugins: []
};

export default config;