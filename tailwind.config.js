module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["IBM Plex Serif", "serif"],
      },
      transitionProperty: {
        width: "width",
      },
      width: {
        60: "60%",
      },
    },
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "group-hover", "focus"],
      scale: ["responsive", "hover", "group-hover", "focus"],
    },
  },
  plugins: [],
};
