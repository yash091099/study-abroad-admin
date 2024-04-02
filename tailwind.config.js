/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "primary-1": "#ff6477",
        gray1: {
          "100": "#18181b",
          "200": "#121212",
          "300": "rgba(255, 255, 255, 0.3)",
        },
        lightgray: "#d5d5d5",
        text: "#656565",
        darkgray: {
          "100": "#a5a5a5",
          "200": "#999",
        },
        gainsboro: {
          "100": "#dbdade",
          "200": "#d9d9d9",
        },
        dodgerblue: "#007bd7",
        "grey-grey-01": "#1a1c1f",
        "primary-primary-07": "#fce6ec",
        "primary-primary-01": "#e40443",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f8f7fa",
          "300": "#f4f4f5",
          "400": "#f1f0f2",
        },
        dimgray: {
          "100": "#71717a",
          "200": "#52525b",
          "300": "rgba(87, 86, 86, 0.15)",
          "400": "rgba(75, 70, 92, 0.08)",
        },
        "gray-200": "#e4e4e7",
        cornflowerblue: "#a8b6ff",
        slategray: {
          "100": "#737990",
          "200": "#6f6b7d",
        },
        black: "#000",
        "light-solid-color-gray-gray-400": "rgba(255, 255, 255, 0.6)",
        midnightblue: "#0d1d54",
        crimson: {
          "100": "#e64a5e",
          "200": "rgba(230, 74, 94, 0.09)",
        },
        "light-solid-color-primary-primary-500-base": "#7367f0",
        "grey-1": "#575656",
        thistle: "#cdc1f9",
        blueviolet: "#5932ea",
        lavenderblush: "#fff0f0",
      },
      spacing: {},
      fontFamily: {
        "semi-bold-11": "'Plus Jakarta Sans'",
        poppins: "Poppins",
        "noto-sans": "'Noto Sans'",
        "small-semi-bold": "Montserrat",
        "light-button-2-button-default": "'Public Sans'",
        "gilroy-regular": "Gilroy-Regular",
        "gilroy-medium": "Gilroy-Medium",
      },
      borderRadius: {
        "581xl": "600px",
        "6xs-7": "6.7px",
        "3xs": "10px",
        "81xl": "100px",
        "6xs": "7px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "1rem",
      xs: "0.75rem",
      sm: "0.875rem",
      xl: "1.25rem",
      mini: "0.938rem",
      "sm-3": "0.831rem",
      "21xl": "2.5rem",
      smi: "0.813rem",
      "3xs": "0.625rem",
      "5xl": "1.5rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      lgi: "1.188rem",
      "7xl": "1.625rem",
      inherit: "inherit",
    },
    screens: {
      mq1800: {
        raw: "screen and (max-width: 1800px)",
      },
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      lg: {
        max: "1200px",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq416: {
        raw: "screen and (max-width: 416px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
