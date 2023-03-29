/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#60ead3",

          secondary: "#6847e0",

          accent: "#8dc113",

          neutral: "#202428",

          "base-100": "#302D39",

          info: "#65A1DC",

          success: "#68E399",

          warning: "#F3C259",

          error: "#F52E52",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
