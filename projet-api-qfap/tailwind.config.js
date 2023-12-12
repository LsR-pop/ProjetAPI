/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#354ACE",
          blueHover: "#2B3AEB",
        },
        secondaryRed: "#E22C3E",
        textColor: "#071F31",
      },

      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },

      width: {
        78: "19.5rem",
      },

      plugins: [],
    },
  },
};
