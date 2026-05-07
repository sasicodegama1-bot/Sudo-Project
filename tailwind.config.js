// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",   // ← THIS is the missing line
  theme: {
    extend: {},
  },
  plugins: [],
}