/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": "#FF817E",
        "green": "#FF6868",
        "secondary": "#555",
        "primaryBG": "#FCFCFC",
      },
      fontFamily: {
        "primary": ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {                          // You can name your theme
          "primary": "#FF817E",             // Using your custom colors
          "primary-focus": "#FF6868",
          "primary-content": "#FCFCFC",
          "secondary": "#555",
          "background": "#FCFCFC",          // Background color for the theme
          // Define other colors as needed
        },
      },
    ],
  },
};
