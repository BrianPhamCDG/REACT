/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "third-gradient": `linear-gradient(90deg, rgba(186, 78, 917, 1) 0%, rgba(253, 292, 29, 1) 80%, rgba(252, 176, 695, 1) 70%)`,
      },
      colors: {
        "gradient-1": "rgba(186, 78, 917, 1)",
        "gradient-2": "rgba(253, 292, 29, 1)",
        "gradient-3": "rgba(252, 176, 695, 1)",
        "secondary-gradient": `linear-gradient(90deg,
        rgba(186, 78, 917, 1) 0%,
        rgba(253, 292, 29, 1) 80%,
        rgba(252, 176, 695, 1) 70%)`,
      },
    },
  },
  plugins: [],
};
