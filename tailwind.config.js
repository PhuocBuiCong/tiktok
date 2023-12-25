module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
      },
      boxShadow: {
        popup: "1px 1px 3px rgba(0, 60, 146, 0.16)",
        popupHover: "3px 3px 6px rgba(0, 60, 146, 0.16)",
        popupOption: "0px 1px 3px rgba(0, 0, 0, 0.08)",
        popupOptionHover: "0px 3px 6px rgba(0, 0, 0, 0.16);",
      },
      lineHeight: {
        xs: "18px",
        sm: "21.6px",
        base: "25.2px",
        lg: "32.4px",
        xl: "43.2px",
      },
      backgroundImage: {
        radio: "url('/src/assets/radio.svg')",
        "radio-disabled": "url('/src/assets/radioDisabled.svg')",
        check: "url('/src/assets/check.svg')",
      },
      maxWidth: {
        half: "50%",
        quarter: "25%",
      },
    },
    colors: {
      blue: {
        100: "#E9F7F9",
        200: "#DCE3F2",
        300: "#75CBDC",
        350: "#B3C7E1",
        400: "#003C92",
      },
      gray: {
        100: "#F2F4F8",
        200: "#D8E0ED",
        250: "#B3C7E1",
        275: "#99A2A5",
        300: "#777777",
        350: "#1618231F",
        400: "#444444",
      },
      white: "#FFFFFF",
      black: "#000000",
      orange: {
        100: "#F8E9E1",
        200: "#F3741F",
      },
      red: {
        100: "#FFF4F5",
        150: "#FE2C55",
        200: "#D31B30",
      },
      transparent: "#00000000",
      positive: "#F3F9F6",
      green: {
        100: "#0BE09B",
      },
    },
    screens: {
      sm: "576px",
      lg: "992px",
      xl: "1200px",
      print: { raw: "print" },
    },
    fontSize: {
      xs: ["0.625rem", "18px"],
      sm: ["0.75rem", "21.6px"],
      base: ["0.875rem", "25.2px"],
      lg: ["1.125rem", "32.4px"],
      xl: ["1.5rem", "43.2px"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
