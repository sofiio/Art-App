/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Custom-1", "sans-serif"],
        custom2: ["Custom-2", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
        quinapple: ["Quinapple", "sans-serif"],
      },
      colors: {
        customColor: "#0492C2",
        buttonColor: "#0492C2",
        GradientColor: "#00BFFF",
        ButtonColor: "#1398C6",
        CardColor: "#1398C6",
      },
    },
  },
  plugins: [],
};
