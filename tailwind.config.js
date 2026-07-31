/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary ink (from the "roxa" logo)
          wine: '#402237',
          'wine-600': '#5a3350',
          'wine-100': '#efe4ec',
          // Warm accent
          pink: '#d8a6a2',
          'pink-200': '#eccecb',
          'pink-50': '#f7ece9',
          // Secondary accent
          green: '#5d6752',
          'green-100': '#e4e7de',
          // Neutrals
          cream: '#f5f3ef',
          paper: '#f4eef7',
          ink: '#271520',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.24em',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        // refined, elegant elevation scale
        card: '0 1px 2px rgba(64,34,55,0.04), 0 12px 32px -12px rgba(64,34,55,0.12)',
        soft: '0 1px 2px rgba(64,34,55,0.04), 0 18px 40px -18px rgba(64,34,55,0.16)',
        glow: '0 30px 70px -24px rgba(64,34,55,0.28)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(1100px 520px at 88% -8%, rgba(216,166,162,0.16), transparent 60%), radial-gradient(760px 460px at 6% 22%, rgba(93,103,82,0.09), transparent 58%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 9s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out both',
        marquee: 'marquee 120s linear infinite',
      },
    },
  },
  plugins: [],
};
