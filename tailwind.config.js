/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#0A0A0A",
          850: "#0E0E0E",
          800: "#111111",
          700: "#161616",
          600: "#1C1C1C",
          500: "#242424",
          400: "#3A3A3A",
          300: "#5C5C5C",
          200: "#8A8A8A",
          100: "#B5B5B5",
        },
        bone: {
          DEFAULT: "#F4F2EE",
          50: "#FAFAFA",
          100: "#F4F2EE",
          200: "#E4E2DE",
          300: "#C4C2BE",
        },
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', 'Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        'micro': '0.22em',
        'wider-2': '0.14em',
      },
      maxWidth: {
        'page': '1440px',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      animation: {
        'shimmer': 'shimmer 4s linear infinite',
        'drift': 'drift 22s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-12px,0)' },
        },
      },
    },
  },
  plugins: [],
};
