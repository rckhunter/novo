import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./modules/**/*.{ts,tsx}"],
  theme: { extend: { colors: { brand: { cyan: "#22d3ee", blue: "#3b82f6" } } } },
  plugins: []
} satisfies Config;
