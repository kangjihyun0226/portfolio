/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        primary: "var(--color-primary)",
        yellow: "var(--color-yellow)",
        green: "var(--color-green)",
        blue: "var(--color-blue)",
        purple: "var(--color-purple)",
        mint: "var(--color-mint)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        korean: ["var(--font-korean)"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        blob: "var(--radius-blob)",
        pill: "var(--radius-pill)",
      },
      maxWidth: {
        container: "var(--container-width)",
      },
      transitionTimingFunction: {
        organic: "var(--ease-organic)",
        snap: "var(--ease-snap)",
      },
    },
  },
  plugins: [],
};
