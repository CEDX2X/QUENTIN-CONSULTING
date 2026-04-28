/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "primary-fixed-dim": "#b4c5ff",
        "error": "#ba1a1a",
        "on-secondary-fixed": "#351000",
        "secondary-fixed-dim": "#ffb693",
        "on-primary-container": "#81a1ff",
        "on-primary-fixed": "#00174b",
        "tertiary": "#212628",
        "surface-container-low": "#f6f3f2",
        "inverse-on-surface": "#f3f0ef",
        "on-tertiary": "#ffffff",
        "surface-tint": "#3759b3",
        "surface-container-lowest": "#ffffff",
        "surface-container-highest": "#e5e2e1",
        "surface-dim": "#dcd9d9",
        "background": "#fcf9f8",
        "secondary-container": "#fe6b00",
        "primary-fixed": "#dbe1ff",
        "error-container": "#ffdad6",
        "primary-container": "#00338d",
        "on-background": "#1c1b1b",
        "secondary-fixed": "#ffdbcc",
        "primary": "#00205f",
        "on-error-container": "#93000a",
        "on-tertiary-container": "#a1a5a8",
        "surface-variant": "#e5e2e1",
        "on-secondary-container": "#572000",
        "on-surface-variant": "#444652",
        "on-tertiary-fixed-variant": "#43474a",
        "on-tertiary-fixed": "#181c1e",
        "surface-bright": "#fcf9f8",
        "on-surface": "#1c1b1b",
        "tertiary-fixed-dim": "#c3c7ca",
        "tertiary-container": "#373b3e",
        "inverse-primary": "#b4c5ff",
        "outline-variant": "#c4c6d4",
        "on-secondary-fixed-variant": "#7a3000",
        "surface": "#fcf9f8",
        "surface-container": "#f0eded",
        "tertiary-fixed": "#e0e3e6",
        "surface-container-high": "#eae7e7",
        "inverse-surface": "#313030",
        "on-error": "#ffffff",
        "on-primary-fixed-variant": "#19409a",
        "on-secondary": "#ffffff",
        "secondary": "#a04100",
        "outline": "#747683",
        "on-primary": "#ffffff"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "gutter": "24px",
        "margin-desktop": "64px",
        "stack-sm": "8px",
        "margin-mobile": "16px",
        "container-max": "1280px",
        "stack-lg": "32px",
        "section-gap": "80px",
        "unit": "4px",
        "stack-md": "16px"
      },
      "fontFamily": {
        "label-sm": ["Inter", "sans-serif"],
        "headline-lg": ["Manrope", "sans-serif"],
        "display-lg": ["Manrope", "sans-serif"],
        "headline-md": ["Manrope", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"]
      },
      "fontSize": {
        "label-sm": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
