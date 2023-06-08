/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary": "linear-gradient(
          90deg,
          rgba(186, 78, 97, 1) 0%,
          rgba(253, 29, 29, 1) 50%,
          rgba(252, 176, 69, 1) 100%
        )",
      },
    },
  },
  plugins: [],
};
