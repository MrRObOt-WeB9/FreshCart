/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        main: "#0aad0a",
        light: "#f0f3f2",
      },
      conatiner: {
        center: true,
        paddingInline: "1rem",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
