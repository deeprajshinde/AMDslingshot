/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-background": "#1b1c1a",
        "on-secondary-fixed-variant": "#444b00",
        "on-surface-variant": "#414844",
        "surface": "#fbf9f5",
        "surface-tint": "#3f6653",
        "primary-fixed-dim": "#a5d0b9",
        "error": "#ba1a1a",
        "tertiary-container": "#6d230f",
        "outline": "#717973",
        "tertiary": "#4f0e00",
        "inverse-surface": "#30312e",
        "secondary-fixed": "#dfec60",
        "inverse-primary": "#a5d0b9",
        "error-container": "#ffdad6",
        "primary": "#012d1d",
        "surface-bright": "#fbf9f5",
        "primary-fixed": "#c1ecd4",
        "surface-container-low": "#f5f3ef",
        "on-secondary-container": "#616a00",
        "on-tertiary-container": "#f3896d",
        "outline-variant": "#c1c8c2",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#dfec60",
        "surface-dim": "#dbdad6",
        "on-tertiary-fixed-variant": "#7c2e19",
        "on-error-container": "#93000a",
        "inverse-on-surface": "#f2f0ed",
        "background": "#fbf9f5",
        "primary-container": "#1b4332",
        "on-secondary-fixed": "#1a1d00",
        "surface-container-high": "#eae8e4",
        "secondary": "#5b6300",
        "on-primary-fixed-variant": "#274e3d",
        "on-primary": "#ffffff",
        "surface-container-highest": "#e4e2de",
        "on-tertiary": "#ffffff",
        "tertiary-fixed": "#ffdbd2",
        "on-primary-fixed": "#002114",
        "on-surface": "#1b1c1a",
        "on-tertiary-fixed": "#3c0800",
        "surface-container": "#efeeea",
        "on-error": "#ffffff",
        "surface-variant": "#e4e2de",
        "on-secondary": "#ffffff",
        "on-primary-container": "#86af99",
        "tertiary-fixed-dim": "#ffb4a1",
        "secondary-fixed-dim": "#c2cf47"
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px"
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
