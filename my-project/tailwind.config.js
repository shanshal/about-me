/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      custom: ['Rubik','sans-serif'],
    },
    colors: {
      primary: "#001C30",
      secondary: "#176B87",
      subsec: "#64CCC5",
      subprim: "#DAFFFB",
    },
    extend: {},
  },
  plugins: [],
};
