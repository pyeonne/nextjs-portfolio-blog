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
        body: "var(--font-poppins)",
        title: "var(--font-montserrat)",
      },
      fontSize: {
        biggest: "var(--biggest-font-size)",
        h1: "var(--h1-font-size)",
        h2: "var(--h2-font-size)",
        h3: "var(--h3-font-size)",
        normal: "var(--normal-font-size)",
        small: "var(--small-font-size)",
        smaller: "var(--smaller-font-size)",
        tiny: "var(--tiny-font-size)",
      },
      backgroundColor: {
        container: "var(--container-color)",
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
      rotate: {
        15: "15deg",
      },
      borderWidth: {
        6: "6px",
      },
      zIndex: {
        1: "1",
      },
      animation: {
        "bounce-skills": "bounce-skills .6s",
      },
      keyframes: {
        "bounce-skills": {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translateY(-6px)" },
          "40%": { transform: "translate(0)" },
          "60%": { transform: "translateY(-3px)" },
          "80%": { transform: "translate(0)" },
        },
      },
    },
  },
  plugins: [],
});
