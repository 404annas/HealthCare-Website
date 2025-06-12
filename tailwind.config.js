/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#c45259",
        primary: "#2d5865",
      },
    },
  },
  plugins: [],
};
