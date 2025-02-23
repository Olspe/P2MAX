module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      inset: {
        "90px": "90px",
        "260px": "260",
      },
      colors: {
        green: "#41dc65;",
        matic: "#05377f;",
        subtle: "#F7F7FA",
        secondary: "#2B54E4"
      },
      boxShadow: {
        nav: "0 12px 40px rgba(128, 128, 128, 0.1)",
      },
      fontFamily: {
        workSans: ['"Work sans"', "sans-serif"],
      },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      // '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      "3xl": [
        "32px",
        {
          lineHeight: "37.5px",
        },
      ],
    },
  },
  plugins: [],
};
