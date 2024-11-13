import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["gd-sage", "sans-serif"],
      },
      textShadow: {
        common:
          "2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(0, 0, 0, 0.3)",
      },
      gridTemplateColumns: {
        "autofit-4": "repeat(auto-fit, minmax(175px, 1fr))",
        "autofit-2": "repeat(auto-fit, minmax(200px, 1fr))",
        "autofit-3": "repeat(auto-fit, minmax(250px, 1fr))",
      },
      boxShadow: {
        "card-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      backgroundSize: {
        "glow-btn": "400% 400%",
      },
      animation: {
        "glow-btn": "glow-btn 1s ease-in-out infinite",
        appear: "appear linear",
      },
      keyframes: {
        "glow-btn": {
          "0% ": {
            "background-position": " 0% 50%",
          },
          "50%": {
            "background-position": " 100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
        appear: {
          from: {
            opacity: "0",
            scale: ".5",
          },
          to: {
            opacity: "1",
            scale: "1",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme, addUtilities }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
      addUtilities({
        ".rotateY-180": {
          transform: "rotateY(180deg)",
        },
      });
    }),
  ],
};
export default config;
