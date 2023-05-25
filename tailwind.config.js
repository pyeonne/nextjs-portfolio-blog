const { withTV } = require("tailwind-variants/transformer");

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "var(--font-montserrat)",
      },
      fontSize: {
        smaller: "var(--smaller-font-size)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom: "0 4px 20px hsla(207, 24%, 35%, 0.1)",
      },
      height: {
        header: "var(--header-height)",
      },
      transitionProperty: {
        color: "color",
        background: "background",
        top: "top",
        bottom: "bottom",
      },
      transitionDuration: {
        400: "400ms",
      },
      borderWidth: {
        6: "6px",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
});
