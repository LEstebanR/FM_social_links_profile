/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "hsl(0, 0%, 8%)",
        darkGrey: "hsl(0, 0%, 12%)",
        primary: "hsl(75, 94%, 57%)",
        grey: "hsl(0, 0%, 20%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      maxWidth: {
        card: "384px",
      },
      maxHeight: {
        card: "611px",
      },
    },
  },
  plugins: [],
};
