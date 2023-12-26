/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        base: "28px",
      },
      colors: {
        userLightCyan: "hsl(193, 38%, 86%)",
        userNeonGreen: "hsl(150, 100%, 66%)",
        userGrayishBlue: "hsl(217, 19%, 38%)",
        userDarkGrayishBlue: "hsl(217, 19%, 24%)",
        userDarkBlue: "hsl(218, 23%, 16%)",
      },
      backgroundImage: {
        userDividerMobile: "url('/pattern-divider-mobile.svg')",
        userDividerDesktop: "url('/pattern-divider-desktop.svg')",
      },
    },
  },
  plugins: [],
};
