import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{ts,tsx}', './services/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF6EA',
        cream: '#F4EBDD',
        champagne: '#C9A45C',
        gold: '#B88A36',
        charcoal: '#26231F',
        taupe: '#81766B',
        porcelain: '#FFFFFF',
        sage: '#7E9A83',
        rose: '#C46F64'
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'Arial', 'sans-serif']
      },
      boxShadow: {
        premium: '0 24px 70px rgba(61, 45, 24, 0.10)',
        card: '0 14px 38px rgba(61, 45, 24, 0.08)'
      },
      backgroundImage: {
        'ivory-radial': 'radial-gradient(circle at 15% 15%, rgba(201,164,92,.18), transparent 28%), radial-gradient(circle at 82% 6%, rgba(255,255,255,.9), transparent 24%), linear-gradient(135deg, #fbf6ea 0%, #f4ebdd 100%)'
      }
    }
  },
  plugins: []
};
export default config;
