module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        fit: "fit-content",
        full: "100%",
        screen: "100vh",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        xxl: "35rem"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
