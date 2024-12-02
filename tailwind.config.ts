import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fbbf24",
        secondary: "#FFFFFF",
        tertiary: "#0B0B0B",
        stroke: "#525252",
        dark: "#020202",
        text: "#8C8C8C",
        "background-light": "#f8fafc",
        "background-dark": "#0a0a0a",
      },
      backgroundColor: {
        default: {
          light: "#f8fafc",
          dark: "#0a0a0a",
        }
      }
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f8fafc",
            primary: "#fbbf24",
            secondary: "#FFFFFF",
          }
        },
        dark: {
          colors: {
            background: "#0a0a0a",
            primary: "#fbbf24",
            secondary: "#FFFFFF",
          }
        }
      },
    }),
  ],
};

export default config;