/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        whisper:['Whisper', "cursive"],
        pacifico:['Pacifico', "cursive"],
        poppins :[ 'Poppins', "sans-serif"],
      },
    },
  },
  plugins: [],
}
