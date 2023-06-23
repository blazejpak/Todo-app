/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      backgroundImage: {
        "dark-desktop": "url('/src/assets/images/bg-desktop-dark.jpg')",
        "dark-mobile": "url('/src/assets/images/bg-mobile-dark.jpg')",
        "light-desktop": "url('/src/assets/images/bg-desktop-light.jpg')",
        "light-mobile": "url('/src/assets/images/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
