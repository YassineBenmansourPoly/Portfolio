import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        graphite: "#0a101b",
        panel: "rgba(12, 18, 31, 0.68)",
        line: "rgba(148, 163, 184, 0.16)",
        cyan: "#22d3ee",
        blue: "#3b82f6",
        violet: "#8b5cf6",
        pink: "#ff4fd8"
      },
      boxShadow: {
        glow: "0 0 60px rgba(34, 211, 238, 0.14)",
        card: "0 24px 70px rgba(0, 0, 0, 0.34)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "Sora", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
