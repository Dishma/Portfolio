import { BiBorderRadius } from 'react-icons/bi'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        "scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor : "rgb(31 29 29 ) white"
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar" : {
            width: "8px"
          },
          "&::-webkit-scrollbar-track" : {
            background: "white"
          },
          "&::-webkit-scrollbar" : {
            backgroundColor: "rgb(31 41 55)",
            BorderRadius: "20px",
            border: "1px solid white"
          },
        }
      }

      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}