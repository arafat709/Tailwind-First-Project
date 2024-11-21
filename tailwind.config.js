/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      "padding":"10px",
    },
    extend: {
      backgroundColor: {
        "header-bg": "#00FFCA"
      },
      backgroundImage:{
        "hero": "url('/src/assets/hero-bg.png')",
         "finance": "url('/src/assets/finance.png')",
         "np": "url('/src/assets/np.png')",
         "footer": "url('/src/assets/footer.png')"
      },
    },
  },
  plugins: [],
}