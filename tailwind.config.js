/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 70px rgba(0,0,0,0.10)",
        "4xl": "0px 0px 20px 5px rgba(0,0,0,0.20)",
      },
    },
  },
  plugins: [],
};
