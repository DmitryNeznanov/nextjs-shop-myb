import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        "2xl": "1920px",
      },
      container: {
        center: true,
        padding: {
          xs: "24px",
          sm: "48px",
          lg: "72px",
          xl: "188px",
          "2xl": "188px",
        },
      },
      colors: {
        primary: "var(--primary)",
        danger: "var(--danger)",
        muted: "var(--muted)",
        black: {
          DEFAULT: "var(--black)",
          squeeze: "var(--black-squeeze)",
        },
        white: {
          DEFAULT: "var(--white)",
          titan: "var(--white-titan)",
        },
        red: {
          DEFAULT: "var(--red)",
          "200": "var(--red-200)",
          "300": "var(--red-300)",
          "400": "var(--red-400)",
        },
        indigo: {
          DEFAULT: "var(--indigo)",
          "600": "var(--indigo-600)",
        },
        gray: {
          DEFAULT: "var(--gray)",
          "100": "var(--gray-100)",
        },
      },
      content: {
        phone: "url('./public/icons/phone.svg')",
      },
      boxShadow: {
        xl: "0px 0px 21px -5px rgba(0,0,0,0.42)",
      },
    },
  },
  plugins: [],
} satisfies Config
