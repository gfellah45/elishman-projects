module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base: "#264E70",
        base2: "#373737",
        base3: "rgba(38, 78, 112, 0.05)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
