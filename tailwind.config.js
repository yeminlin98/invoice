/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily:{
     sans :['Montserrat','Padauk'," sans-serif"]

    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

