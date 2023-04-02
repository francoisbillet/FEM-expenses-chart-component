/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      red: {
        200: "hsl(10, 79%, 85%)",
        600: "hsl(10, 79%, 65%)",
      },
      cyan: {
        200: "hsl(186, 34%, 85%)",
        600: "hsl(186, 34%, 60%)",
      },
      brown: {
        300: "hsl(28, 10%, 53%)",
        800: "hsl(25, 47%, 15%)",
      },
      cream: "hsl(27, 66%, 92%)",
      orange: "hsl(33, 100%, 93%)",
      white: "#fff",
    },
  },
  plugins: [],
};
