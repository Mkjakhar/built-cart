module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(111.19deg, #FDC63A 5.29%, rgba(0, 0, 0, 0.96) 98.58%)",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      backgroundColor: {
        primary: "#FDC63A",
        "light-gray": "#D9D9D9",
      },
      fontSize: {
        // xs: "10px",
        // sm: "12px",
        // md: "14px",
        // lg: "15px",
        // xl: "17px",
        "2xl": "26px",
        "3xl": "30px",
        "4xl": "36px",
      },
      colors: {
        primary: "#FDC63A",
      },
    },
  },
  plugins: [],
};
