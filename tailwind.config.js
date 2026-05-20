/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070707",
          900: "#0A0A0A",
          800: "#111111",
          700: "#161616",
          600: "#1C1C1C",
          500: "#262626",
          400: "#3A3A3A",
          300: "#5C5C5C",
          200: "#8A8A8A",
        },
        bone: {
          DEFAULT: "#F5F2EC",
          50: "#FBFAF6",
          100: "#F5F2EC",
          200: "#E7E2D7",
          300: "#C8C2B4",
        },
        gold: {
          DEFAULT: "#C9A961",
          50: "#F5EBCF",
          100: "#E8D49A",
          400: "#D4B470",
          500: "#C9A961",
          600: "#A88947",
          700: "#7E6530",
        },
        oxblood: "#3A1212",
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        'micro': '0.22em',
        'wider-2': '0.14em',
      },
      maxWidth: {
        'page': '1440px',
      },
      animation: {
        'marquee': 'marquee 38s linear infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
