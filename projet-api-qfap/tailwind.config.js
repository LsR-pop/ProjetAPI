// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#F0F4F8",
          blueHover: "#2B3AEB",
        },
        secondaryRed: "E22C3E",
        textColor: "#071F31",
      },

      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },

      plugins: [],
    },
  },
};
