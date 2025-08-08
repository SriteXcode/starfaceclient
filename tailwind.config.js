// starfaceclient/tailwind.config.js
/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // update based on your project structure
  ],
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 20s linear infinite",
        scrollRight: "scrollRight 20s linear infinite",
      },
    },
  },
  plugins: [],
};
