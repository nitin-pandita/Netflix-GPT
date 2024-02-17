/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        netflixRed: "#e50914",
        netflixBlack: "#141414",
        netflixGray: "#8c8c8c",
        netflixWhite: "#f5f5f1",
      },
    },
  },
  plugins: [],
};
