/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins4:"Poppins4",
        Poppins5:"Poppins5",
        Poppins6:"Poppins6",
        Poppins7:"Poppins7",
      },
      colors: {
        primary: '#2D2E32',
        primaryVa: '#656565',
        secondary: '#147EFB',
      },
    },
  },
  plugins: [],
}
