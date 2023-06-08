/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-1": "rgba(186, 78, 917, 1) 0%",
        "gradient-2": "#243c5a",
        "gradient-3": "#243c5a",
      },
    },
  },
  plugins: [],
};
