/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/**/*.html"],
  theme: {
    extend: {
      textColor: {
        primary: "red",
      },
      borderColor: {
        primary: "red",
      },
      backgroundColor: {
        primary: "red",
      },
      fontFamily: {
        body: ["Roboto Mono"],
      },
    },
  },
  plugins: [],
};
