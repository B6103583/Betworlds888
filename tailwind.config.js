module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "768px", //Tablet min-width
      md: "1024px", //Laptop
      lg: "1440px", //Desktop
      xl: "1850px", //
    },
  },
  plugins: [],
}